import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';

const UnLockIcon = ({width, height, size, color}) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5zM6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {UnLockIcon};
