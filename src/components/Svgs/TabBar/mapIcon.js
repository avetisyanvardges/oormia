import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';

const MapIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.73 6.27L6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 01-2.48 0c-.95-.9-2.04-2.36-1.64-4.08z"
        stroke={color || '#292D32'}
        strokeWidth={1.5}
      />
      <Path
        d="M9.095 8.7h.009"
        stroke={color || '#292D32'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {MapIcon};
