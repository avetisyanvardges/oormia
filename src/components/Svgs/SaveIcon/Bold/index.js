import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

const SaveBoldIcon = ({ width, height, size, color }) => {
  console.log(width);
  return (
    <Svg
      width={size || width || normalize(24)}
      height={size || height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { SaveBoldIcon };
