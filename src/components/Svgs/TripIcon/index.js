import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const TripIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.998 19.75h-2.68c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81h-2.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04l-7.99 6.99c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81h2.68c.41 0 .75.34.75.75s-.34.75-.75.75zM20 15h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-1.49 4.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1zM5.469 2c-1.93 0-3.5 1.57-3.5 3.5S3.539 9 5.469 9s3.5-1.57 3.5-3.5S7.409 2 5.469 2zm.04 4.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { TripIcon };