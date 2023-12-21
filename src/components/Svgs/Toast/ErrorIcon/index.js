import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const ToastErrorIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(20)}
      height={height || size || normalize(20)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
        stroke={color || Colors.red['500']}
        strokeWidth={1.5}
      />
      <Path
        d="M7.5 7.5l5 5m0-5l-5 5"
        stroke={color || Colors.red['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export { ToastErrorIcon };
