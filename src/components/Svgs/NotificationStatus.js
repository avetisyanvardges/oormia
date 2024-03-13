import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
function NotificationStatusIcon({ width, height }) {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19 8a3 3 0 100-6 3 3 0 000 6zM7 13h5M7 17h9"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default NotificationStatusIcon;
