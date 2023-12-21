import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const ToastSuccessIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(20)}
      height={height || size || normalize(20)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
        stroke={color || Colors.green['500']}
        strokeWidth={1.5}
      />
      <Path
        d="M13.334 7.5l-4.167 5-2.5-2.273"
        stroke={color || Colors.green['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ToastSuccessIcon };
