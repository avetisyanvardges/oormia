import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

const ListIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 11-2 0 1 1 0 012 0zm0-6a1 1 0 11-2 0 1 1 0 012 0zm0 12a1 1 0 11-2 0 1 1 0 012 0z"
        stroke={color || '#fff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ListIcon };
