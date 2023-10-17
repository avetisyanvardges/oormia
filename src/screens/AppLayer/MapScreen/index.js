import React, { useEffect, useRef } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Linking,
  PermissionsAndroid,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from 'assets/images';
import { eventData } from 'assets/data';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';
import MapView, { Marker } from 'react-native-maps';
import { MAP_DEFAULT_THEME } from 'assets/Theme/MapTheme';
import Geolocation from 'react-native-geolocation-service';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import useCallbackState from 'utils/useCallbackState';
import { navigate } from 'services/NavigationService';
import Lottie from 'lottie-react-native';
import Permissions from 'react-native-permissions';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';

const coordinates = [
  {
    location: { lat: 40.779327, lon: 43.855692 },
    image: images.event,
    title: 'Entertainment',
    id: 0,
  },
  {
    location: { lat: 40.780498, lon: 43.851679 },
    image: images.eventImg_2,
    title: 'Entertainment',
    id: 1,
  },
  {
    location: { lat: 40.786246, lon: 43.845812 },
    image: images.eventImg_1,
    title: 'Entertainment',
    id: 2,
  },
  {
    location: { lat: 40.790281, lon: 43.846065 },
    image: images.eventImg_3,
    title: 'Entertainment',
    id: 3,
  },
  {
    location: { lat: 40.779368, lon: 43.859312 },
    image: images.eventImg_4,
    title: 'Entertainment',
    id: 4,
  },
];

const MapScreen = () => {
  const mapRef = useRef();
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
        ...viewableItems[viewableItems.length - 1].item.location,
      },
      callback: () => {
        mapRef.current.animateToRegion({
          ...viewableItems[viewableItems.length - 1].item.location,
        });
      },
    });
  };

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
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        },
        callback: () => {
          mapRef.current.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        },
      });
    }
    // this.props.makeAction(UPDATE_USER_LOCATION, {location: location});
  };
  // useEffect(() => {
  //   MapboxGL.setTelemetryEnabled(false);
  // }, []);

  return (
    <View style={{ flex: 1 }}>
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
            color={Colors.oxford_blue['500']}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('EventsScreen')}
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
              color={Colors.oxford_blue['500']}
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
        customMapStyle={MAP_DEFAULT_THEME}>
        <Marker coordinate={marker.val}>
          <Lottie
            source={require('../../../assets/lottie/location.json')}
            autoPlay
            loop
            style={{
              width: normalize(60),
              height: normalize(60),
            }}
            // resizeMode={'cover'}
          />
        </Marker>

        {/*{eventData.map(item => {*/}
        {/*  const location = {*/}
        {/*    longitude: parseFloat(item.location.longitude),*/}
        {/*    latitude: parseFloat(item.location.latitude),*/}
        {/*  };*/}
        {/*  return (*/}
        {/*   */}
        {/*  );*/}
        {/*})}*/}
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: normalize(50),
        }}>
        <FlatList
          horizontal
          data={eventData}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <View style={{ paddingTop: normalize(70) }}>
                {/*<TouchableOpacity onPress={() => navigate('EventsScreen')}>*/}
                {/*<Text*/}
                {/*  style={{*/}
                {/*    ...FontStyle.text_h5.regular,*/}
                {/*    color: Colors.oxford_blue['200'],*/}
                {/*    alignSelf: 'flex-end',*/}
                {/*    margin: normalize(10),*/}
                {/*  }}>*/}
                {/*  View list*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                <Pressable
                  key={index.toString()}
                  style={{
                    width: deviceInfo.deviceWidth - normalize(20),
                    backgroundColor: Colors.white,
                    borderRadius: normalize(20),
                    alignItems: 'center',
                    paddingHorizontal: normalize(10),
                    flexDirection: 'row',
                    padding: normalize(16),
                    ...Shadow,
                    zIndex: 0,
                  }}>
                  <Image
                    source={item.photo}
                    style={{
                      width: normalize(100),
                      height: normalize(100),
                      borderRadius: normalize(12),
                      resizeMode: 'cover',
                      overflow: 'hidden',
                      zIndex: 999,
                      ...Shadow,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginLeft: normalize(10),
                    }}>
                    <CustomText
                      children={item.name.slice(0, 30)}
                      globalStyle={{
                        fontWeight: 'bold',
                        marginBottom: normalize(15),
                      }}
                    />
                    <CustomText children={item.description.slice(0, 30)} />
                  </View>
                </Pressable>
              </View>
            );
          }}
          pagingEnabled
          ItemSeparatorComponent={() => (
            <View style={{ width: normalize(20) }} />
          )}
          contentContainerStyle={{
            paddingHorizontal: normalize(10),
            paddingBottom: normalize(70),
          }}
          showsHorizontalScrollIndicator={false}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />
      </View>
    </View>
  );
};

export default MapScreen;
