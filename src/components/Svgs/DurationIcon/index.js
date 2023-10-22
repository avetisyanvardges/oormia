import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

const DurationIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M15.24 2H8.76C5 2 4.71 5.38 6.74 7.22l10.52 9.56C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { DurationIcon };
