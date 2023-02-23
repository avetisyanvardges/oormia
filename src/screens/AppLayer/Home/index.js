import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'assets/RootStyles';
import {normalize} from 'assets/RootStyles/normalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MapView from 'react-native-maps';
import {mapStyle} from 'assets/Theme/MapTheme';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: normalize(insets.top),
        padding: normalize(10),
        overflow: 'hidden',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          borderRadius: normalize(22),
          overflow: 'hidden',
        }}>
        <MapView
          // ref={mapRef}
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
          showsUserLocation={true}
          showsMyLocationButton={false}
          loadingEnabled={true}
          // initialRegion={region}
          // onRegionChangeComplete={onRegionChange}
          maxZoomLevel={19}
          minZoomLevel={3}
          customMapStyle={mapStyle}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
