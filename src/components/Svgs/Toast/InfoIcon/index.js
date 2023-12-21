import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const ToastInfoIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(20)}
      height={height || size || normalize(20)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M10.223 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM10.223 13.333V10M10.223 6.664h.008"
        stroke={color || Colors.blue['600']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ToastInfoIcon };
