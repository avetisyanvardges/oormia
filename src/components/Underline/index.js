import React from 'react';
import { View } from 'react-native';
import { Colors } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';

const Underline = ({ height, color, style }) => {
  return (
    <View
      style={{
        height: height ? normalize(height) : normalize(1),
        backgroundColor: color || Colors.grey['50'],
        ...style,
      }}
    />
  );
};

export default Underline;
