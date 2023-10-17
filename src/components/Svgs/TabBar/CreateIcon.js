import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors} from 'assets/RootStyles';

const CreateIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 25 26"
      fill="none">
      <Path
        d="M8 2.805v3M16 2.805v3M3.5 9.895h17M18 23.805a4 4 0 100-8 4 4 0 000 8zM19.49 19.855h-2.98M18 18.395v2.99"
        stroke={color || Colors.white}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 9.305v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
        stroke={color || Colors.white}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.995 14.505h.01M8.294 14.505h.01M8.294 17.505h.01"
        stroke={color || Colors.white}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {CreateIcon};
