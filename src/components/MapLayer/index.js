import React, {useEffect, useState} from 'react';
import useContainer from './hook.js';
import {Colors, Shadow} from 'assets/RootStyles';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from 'assets/Theme/MapTheme';
import MapView from 'react-native-map-clustering';
import {isEmpty} from 'lodash';
import Geolocation from '@react-native-community/geolocation';
import {deviceInfo} from 'assets/deviceInfo';
import {Animated, PermissionsAndroid, View} from 'react-native';
import Permissions, {PERMISSIONS, RESULTS} from 'react-native-permissions';
import {normalize} from 'assets/RootStyles/normalize';

const MapLayer = ({
  region,
  setRegion,
  markers,
  selectedMarker,
  listIconVisible,
  currentLocationIconVisible,
  markerPress,
  mapHeight,
}) => {
  const {mapRef} = useContainer();
  const [startedLocation, setStartedLocation] = useState(region);
  const [endedLocation, setEndedLocation] = useState(region);
  const onRegionChange = region => {
    region.latitudeDelta = region.latitudeDelta ? region.latitudeDelta : 0.005;
    region.longitudeDelta = region.longitudeDelta
      ? region.longitudeDelta
      : 0.005;
    setRegion(region);
  };

  function goBack() {
    Geolocation.getCurrentPosition(pos => {
      const {coords} = pos;
      // dispatch(userTypes.SET_USER_LOCATION, coords);
      mapRef.current?.animateToRegion({
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  }

  async function requestGeolocationPermission() {
    try {
      if (deviceInfo.android) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          goBack();
          console.log('You can use the geolocation');
        } else {
          console.log('Geolocation permission denied');
        }
      } else {
        const permissionStatus = await Permissions.request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        if (permissionStatus === RESULTS.GRANTED) {
          goBack();
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestGeolocationPermission();
  }, []);

  useEffect(() => {
    if (!isEmpty(selectedMarker)) {
      mapRef?.current?.animateCamera({
        center: {
          latitude: JSON.parse(selectedMarker.latitude) / 1.000137319201076,
          longitude: JSON.parse(selectedMarker.longitude) / 1.000004894890418,
        },
      });
    }
  }, [selectedMarker]);

  return (
    <Animated.View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={mapRef}
        style={{
          width: '100%',
          height: '110%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
        }}
        onTouchStart={() => setStartedLocation(region)}
        onTouchEnd={() => setEndedLocation(region)}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        loadingEnabled={true}
        initialRegion={region}
        onRegionChangeComplete={onRegionChange}
        maxZoomLevel={19}
        minZoomLevel={3}
        customMapStyle={mapStyle}
        clusterColor={Colors.oxford_blue['500']}
        animationEnabled
      />
      {isEmpty(selectedMarker) && currentLocationIconVisible && (
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: normalize(75),
            zIndex: 999,
            ...Shadow,
          }}>
          {/*<Icon name={ICON_NAME.MARK} onPress={goBack} />*/}
        </View>
      )}
      {isEmpty(selectedMarker) && listIconVisible ? (
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 999,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/*<Icon*/}
          {/*  name={ICON_NAME.LIST}*/}
          {/*  onPress={() => navigate(routNames.ORDER_PICKUP_POINT_LIST)}*/}
          {/*/>*/}
        </View>
      ) : null}
    </Animated.View>
  );
};

export default MapLayer;
