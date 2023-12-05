import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const MoreIcon = ({ width, height, size, color, backgroundColor }) => {
  console.log(width);
  return (
    <Svg
      width={size || width || normalize(24)}
      height={size || height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM19 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill={backgroundColor || Colors.purple['500']}
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export { MoreIcon };
