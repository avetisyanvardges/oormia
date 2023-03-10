import React from 'react';
import {Path, Svg} from 'react-native-svg';

const WorldIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 3h1a28.424 28.424 0 000 18H8M15 3c.97 2.92 1.46 5.96 1.46 9"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16v-1c2.92.97 5.96 1.46 9 1.46M3 9a28.424 28.424 0 0118 0M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {WorldIcon};
