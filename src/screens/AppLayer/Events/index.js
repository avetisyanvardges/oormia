import React, {useState} from 'react';
import {View} from 'react-native';
import useContainer from './hook';
import MapLayer from 'components/MapLayer';

const EventsScreen = () => {
  const {mapRef} = useContainer();
  const [region, setRegion] = useState({
    latitude: 40.7929026,
    longitude: 43.84649710000001,
    latitudeDelta: 2,
    longitudeDelta: 2,
  });
  return (
    <View style={{flex: 1}}>
      <MapLayer region={region} setRegion={setRegion} />
    </View>
  );
};

export default EventsScreen;
