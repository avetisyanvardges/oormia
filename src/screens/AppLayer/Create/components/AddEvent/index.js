import React from 'react';
import {ImageBackground, View} from 'react-native';
import images from 'assets/images';
import {normalize} from 'assets/RootStyles/normalize';

const AddEvent = ({categories}) => {
  return (
    <View>
      <ImageBackground
        source={images.categories[categories]}
        style={{height: normalize(170)}}
      />
      <View />
    </View>
  );
};

export default AddEvent;
