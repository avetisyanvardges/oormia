import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors} from 'assets/RootStyles';

const EventsIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 00-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 00-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5zM7 11h6M7 16h2.62"
        stroke={color || Colors.oxford_blue['500']}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12z"
        stroke={color || Colors.oxford_blue['500']}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.75 20.25a2.5 2.5 0 012.5-2.5 2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 01-2.5 2.5 2.5 2.5 0 012.5 2.5z"
        stroke={color || Colors.oxford_blue['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {EventsIcon};