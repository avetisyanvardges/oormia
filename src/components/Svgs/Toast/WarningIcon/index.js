import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const ToastWarningIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(20)}
      height={height || size || normalize(20)}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M10.219 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM10.219 6.664v3.333m0 3.334h.008"
        stroke={color || Colors.orange['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ToastWarningIcon };
