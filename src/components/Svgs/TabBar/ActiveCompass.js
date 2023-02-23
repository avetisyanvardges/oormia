import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';

const ActiveCompass = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(36)}
      height={height || normalize(36)}
      viewBox="0 0 36 36"
      fill="none">
      <Circle cx={18.5294} cy={18.5294} r={16.4118} fill="#A347FF" />
      <Path
        d="M23.772 11.707a1.261 1.261 0 011.58 1.58l-2.678 8.56a1.261 1.261 0 01-.828.827l-8.559 2.678a1.261 1.261 0 01-1.58-1.58l2.678-8.56c.124-.394.433-.703.827-.827l8.56-2.678z"
        fill="#fff"
      />
    </Svg>
  );
};

export {ActiveCompass};
