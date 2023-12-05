import React from 'react';
import { ClipPath, Defs, G, Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const ShareIcon = ({ width, height, size, color, backgroundColor }) => {
  return (
    <Svg
      width={size || width || normalize(24)}
      height={size || height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9.32 6.5l2.56-2.56 2.56 2.56M11.88 14.18V4.01M4 12c0 4.42 3 8 8 8s8-3.58 8-8"
        stroke={color || Colors.purple['500']}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { ShareIcon };
