import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import images from 'assets/images';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';
import { Marker } from 'react-native-maps';
import { MAP_DEFAULT_THEME } from 'assets/Theme/MapTheme';
import Geolocation from 'react-native-geolocation-service';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import useCallbackState from 'utils/useCallbackState';
import { navigate } from 'services/NavigationService';
import Lottie from 'lottie-react-native';
import Permissions from 'react-native-permissions';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import dispatch from 'utils/dispatch/dispatch';
import { getAllEvents } from 'state/events/operations/getAllEvents';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { SharedElement } from 'react-navigation-shared-element';
import { routNames } from 'constants/routNames';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView from 'react-native-map-clustering';

const MapScreen = ({ navigation }) => {
  const mapRef = useRef();
  const listRef = useRef();
  const insets = useSafeAreaInsets();
  const { events } = useSelector(({ events }) => events);
  const [showEvent, setShowEvent] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [region, setRegion] = useCallbackState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const [marker, setMarker] = useCallbackState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const onViewableItemsChanged = ({ viewableItems }) => {
    setMarker({
      val: {
        latitude: viewableItems[viewableItems.length - 1].item.lat,
        longitude: viewableItems[viewableItems.length - 1].item.lon,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      },
      callback: () => {
        mapRef.current.animateToRegion({
          latitude: viewableItems[viewableItems.length - 1].item.lat,
          longitude: viewableItems[viewableItems.length - 1].item.lon,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      },
    });
  };

  useLayoutEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

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
        currrentLocation();
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
          currrentLocation();
        } else {
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestGeolocationPermission();
  }, []);

  const currrentLocation = async () => {
    const dataLocation =
      await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 10000,
      });
    if (dataLocation === 'enabled' || dataLocation === 'already-enabled') {
      try {
        Geolocation.getCurrentPosition(position => {
          console.log(dataLocation, 'position');
          mapRef.current.animateToRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
          setRegion({
            val: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              longitudeDelta: 0.001,
              latitudeDelta: 0.001,
            },
          });
        });
      } catch (e) {
        console.log(e, 'Error');
      }
    }
  };

  const onRegionChange = region => {
    region.latitudeDelta = region.latitudeDelta ? region.latitudeDelta : 0.005;
    region.longitudeDelta = region.longitudeDelta
      ? region.longitudeDelta
      : 0.005;
    setRegion({ val: region });
  };

  const getCoordinate = location => {
    if (location?.latitude) {
      setRegion({
        val: {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        },
        callback: () => {
          mapRef.current.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          });
        },
      });
    }
    // this.props.makeAction(UPDATE_USER_LOCATION, {location: location});
  };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      dispatch(getAllEvents({ page: 0, size: 100 }));
    });

    return () => {
      subscribe();
    };
  }, []);

  const renderEvents = useMemo(() => {
    return events?.map((item, index) => {
      const focused =
        marker.val.latitude === item.lat && marker.val.longitude === item.lon;
      return (
        <Marker
          key={`${item.id}`}
          identifier={`${item.id}`}
          coordinate={{
            latitude: item.lat,
            longitude: item.lon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          onPress={() => {
            navigate(routNames.EVENT_DETAIL, {
              event: item,
            });
          }}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: normalize(60),
                height: normalize(60),
                borderRadius: normalize(30),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.purple['200'],
              }}>
              <SharedElement id={`item.${item?.id}.photo`}>
                <FastImage
                  source={{
                    uri:
                      item?.pictures?.[0]?.fileDownloadUri ||
                      item?.preferences?.[0]?.picture?.fileDownloadUri,
                  }}
                  style={{
                    width: normalize(50),
                    height: normalize(50),
                    borderRadius: normalize(25),
                  }}
                />
              </SharedElement>
            </View>
            {focused ? (
              <View
                style={{
                  width: normalize(10),
                  height: normalize(10),
                  borderRadius: normalize(5),
                  marginTop: normalize(10),
                  backgroundColor: Colors.purple['500'],
                }}
              />
            ) : null}
          </View>
          {/*<Lottie*/}
          {/*  source={require('../../../assets/lottie/location.json')}*/}
          {/*  autoPlay*/}
          {/*  loop*/}
          {/*  style={{*/}
          {/*    width: normalize(60),*/}
          {/*    height: normalize(60),*/}
          {/*  }}*/}
          {/*  resizeMode={'cover'}*/}
          {/*/>*/}
        </Marker>
      );
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          top: insets.top + normalize(16),
          right: normalize(8),
          zIndex: 999,
        }}>
        <TouchableOpacity
          onPress={() => navigate(routNames.FILTERS)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: normalize(8),
            backgroundColor: Colors.white,
            borderRadius: normalize(50),
            paddingHorizontal: normalize(8),
            ...Shadow,
          }}>
          <Icon name={ICON_NAMES.FILTER} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: normalize(270),
          right: normalize(8),
          zIndex: 999,
        }}>
        <TouchableOpacity
          onPress={() => navigate('EventsScreen')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: normalize(8),
            backgroundColor: Colors.white,
            borderRadius: normalize(50),
            paddingHorizontal: normalize(8),
            ...Shadow,
          }}>
          <Icon
            name={ICON_NAMES.LIST}
            size={normalize(22)}
            color={Colors.purple['500']}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: normalize(8),
            backgroundColor: Colors.white,
            borderRadius: normalize(50),
            paddingHorizontal: normalize(8),
            ...Shadow,
            marginTop: normalize(10),
          }}>
          <View style={{ transform: [{ rotate: '-45deg' }] }}>
            <Icon
              name={ICON_NAMES.MY_LOCATION}
              size={normalize(22)}
              color={Colors.purple['500']}
            />
          </View>
        </TouchableOpacity>
      </View>
      <MapView
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        provider="google"
        showsUserLocation={true}
        showsMyLocationButton={false}
        loadingEnabled={true}
        initialRegion={region.val}
        // onRegionChange={onRegionChange}
        onRegionChangeComplete={onRegionChange}
        maxZoomLevel={19}
        minZoomLevel={3}
        customMapStyle={MAP_DEFAULT_THEME}
        clusterColor={Colors.purple['500']}
        animationEnabled>
        {renderEvents}
      </MapView>
    </View>
  );
};

export default MapScreen;
