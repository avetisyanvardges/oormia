import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

const CurrentLocationIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15a3 3 0 100-6 3 3 0 000 6zM12 4V2M4 12H2M12 20v2M20 12h2"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { CurrentLocationIcon };
