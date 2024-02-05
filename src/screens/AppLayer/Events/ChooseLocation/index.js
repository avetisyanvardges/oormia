import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  Linking,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Styles } from './styles';
import { normalize } from 'assets/RootStyles/normalize';
import { MAP_DEFAULT_THEME } from 'assets/Theme/MapTheme';
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontStyle } from 'assets/RootStyles';
import { back, navigate } from 'services/NavigationService';
import { deviceInfo } from 'assets/deviceInfo';
import { routNames } from 'constants/routNames';
import Lottie from 'lottie-react-native';
import { CustomText } from 'components/Text';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Permissions from 'react-native-permissions';
import dispatch from 'utils/dispatch/dispatch';
import { getCoordinatesAddress } from 'state/locations/operations/getCoordinatesAddress';
import { useSelector } from 'react-redux';
import { clean_formatted_address } from 'state/locations';

const ChooseLocation = ({ route }) => {
  const { address } = route?.params;
  const { formatted_address } = useSelector(({ locations }) => locations);
  const styles = Styles();
  const mapRef = useRef(null);
  const [loc, setLoc] = useState('');
  const [region, setRegion] = useState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  useEffect(() => {
    if (formatted_address) {
      setLoc(formatted_address);
    }
  }, [formatted_address]);

  function goBack() {
    Geolocation.getCurrentPosition(pos => {
      const { coords } = pos;

      // dispatch(userTypes.SET_USER_LOCATION, coords);
      mapRef.current?.animateToRegion({
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  }

  const checkPermission = async () => {
    const permission = deviceInfo.ios
      ? Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const status = await Permissions.check(permission);
    return status;
  };

  const requestPermission = async () => {
    const permission = deviceInfo.ios
      ? Permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : Permissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const status = await Permissions.request(permission);
    return status;
  };

  async function requestGeolocationPermission() {
    try {
      const status = await checkPermission();
      if (status === 'granted') {
        goBack();
      } else if (status === 'blocked') {
        // Prompt user to go to Settings app
        Alert.alert(
          'Location Permission Required',
          'Please go to the Settings app and grant permission for this app to access your location.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
      } else {
        const newStatus = await requestPermission();
        if (newStatus === 'granted') {
          goBack();
        } else {
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestGeolocationPermission();

    return () => {
      dispatch(clean_formatted_address());
    };
  }, []);
  const onRegionChange = region => {
    region.latitudeDelta = region.latitudeDelta ? region.latitudeDelta : 0.005;
    region.longitudeDelta = region.longitudeDelta
      ? region.longitudeDelta
      : 0.005;

    dispatch(
      getCoordinatesAddress({
        longitude: region.longitude,
        latitude: region.latitude,
      }),
    );

    setRegion(region);
  };

  useEffect(() => {
    if (address) {
      setRegion(address);
    } else {
      requestGeolocationPermission();
    }
  }, [address]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: '90%',
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View
              style={{
                width: '100%',
                position: 'absolute',
                zIndex: 999,
                paddingHorizontal: normalize(16),
                paddingTop: normalize(16),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  borderRadius: normalize(12),
                  flexDirection: 'row',
                }}>
                <GooglePlacesAutocomplete
                  nearbyPlacesAPI="GooglePlacesSearch"
                  // ref={ref}
                  placeholder={'Search'}
                  autoFocus={false}
                  returnKeyType={'search'}
                  listViewDisplayed={false}
                  fetchDetails={true}
                  renderDescription={row => row.description}
                  isRowScrollable
                  textInputProps={{
                    placeholderTextColor: Colors.oxford_blue['200'],
                    returnKeyType: 'search',
                  }}
                  styles={{
                    textInput: {
                      // paddingVertical: deviceInfo?.ios
                      //   ? normalize(15)
                      //   : normalize(10),
                      ...FontStyle.text_h5.regular,
                      lineHeight: deviceInfo.ios ? 0 : normalize(20),
                      color: Colors.grey['500'],
                      paddingHorizontal: normalize(12),
                      borderRadius: normalize(12),
                    },
                    row: {
                      paddingVertical: normalize(7),
                      backgroundColor: Colors.white,
                      borderBottomLeftRadius: normalize(12),
                      borderBottomRightRadius: normalize(12),
                    },
                    separator: {
                      height: 0.5,
                      backgroundColor: Colors.oxford_blue['100'],
                    },
                  }}
                  onPress={(data, details = null) => {
                    dispatch(
                      getCoordinatesAddress({
                        longitude: region.longitude,
                        latitude: region.latitude,
                        callback: json => {
                          console.log(json, 'LOCATION');
                          let formatted_address;
                          const { name, description } =
                            json?.response?.GeoObjectCollection
                              ?.featureMember?.[0]?.GeoObject;
                          if (name && description) {
                            formatted_address = `${name}, ${description}`;
                            setLoc(formatted_address);
                          }

                          const location = {
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            longitudeDelta: 0.001,
                            latitudeDelta: 0.001,
                            address: formatted_address,
                          };

                          setRegion({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            longitudeDelta: 0.001,
                            latitudeDelta: 0.001,
                          });
                          mapRef.current.animateToRegion({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            longitudeDelta: 0.015,
                            latitudeDelta: 0.015,
                          });
                        },
                      }),
                    );
                  }}
                  renderRow={rowData => {
                    const title = rowData.structured_formatting.main_text;
                    const address =
                      rowData.structured_formatting.secondary_text;
                    return (
                      <View>
                        <CustomText
                          children={title}
                          globalStyle={{
                            ...FontStyle.text_h5.regular,
                          }}
                        />
                        <CustomText
                          children={address}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: Colors.grey['200'],
                          }}
                        />
                      </View>
                    );
                  }}
                  onFail={error => console.error(error)}
                  query={{
                    key: 'AIzaSyDba3Mw942gJP8IwYFu4IQgU8f_3qubuA8',
                    language: 'en',
                    location: `${region.latitude},${region.longitude}`,
                    radius: '2000',
                  }}
                  GoogleReverseGeocodingQuery={{}}
                  GooglePlacesSearchQuery={{
                    rankby: 'distance',
                    types: 'food',
                  }}
                  enablePoweredByContainer={false}
                  filterReverseGeocodingByTypes={[
                    'locality',
                    'administrative_area_level_3',
                  ]}
                  debounce={300}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={goBack}
                style={{
                  backgroundColor: Colors.white,
                  padding: normalize(10),
                  borderRadius: normalize(12),
                  marginLeft: normalize(10),
                }}>
                <View style={{ transform: [{ rotate: '-45deg' }] }}>
                  <Icon name={ICON_NAMES.MY_LOCATION} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                alignSelf: 'center',
                backgroundColor: 'white',
                height: '100%',
                width: '100%',
                borderTopRightRadius: normalize(24),
                borderTopLeftRadius: normalize(24),
              }}>
              <MapView
                ref={mapRef}
                style={styles.mapStyle}
                provider="google"
                showsUserLocation={false}
                showsMyLocationButton={false}
                loadingEnabled={true}
                initialRegion={region}
                maxZoomLevel={19}
                minZoomLevel={3}
                onRegionChangeComplete={onRegionChange}
                onPress={event => {
                  const location = event.nativeEvent.coordinate;
                  onRegionChange(location);
                }}
                // onRegionChange={onRegionChange}
                customMapStyle={MAP_DEFAULT_THEME}>
                <Marker coordinate={region}>
                  <Lottie
                    source={require('../../../../assets/lottie/location.json')}
                    autoPlay
                    loop
                    style={{
                      width: normalize(60),
                      height: normalize(60),
                    }}
                    // resizeMode={'cover'}
                  />
                </Marker>
              </MapView>
            </View>
            <View
              style={{
                width: '100%',
                position: 'absolute',
                bottom: '5%',
                alignItems: 'center',
              }}>
              <Button
                title={'Add'}
                textStyle={{ color: Colors.white }}
                onPress={() =>
                  navigate(routNames.CREATE_EVENT, {
                    screen: 'create',
                    region: {
                      ...region,
                      address: loc,
                    },
                  })
                }
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChooseLocation;
