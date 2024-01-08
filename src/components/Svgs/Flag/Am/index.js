import React from 'react';
import { normalize } from 'assets/RootStyles/normalize';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const AmFlagIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 32 32"
      fill="none">
      <G clipPath="url(#clip0_81_10786)">
        <Path
          d="M34.135 0H-2.132a4.267 4.267 0 00-4.266 4.267v23.466A4.267 4.267 0 00-2.132 32h36.267a4.267 4.267 0 004.267-4.267V4.267A4.267 4.267 0 0034.135 0z"
          fill="#1A47B8"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 21.332h44.8v10.667H0V21.332z"
          fill="#FFDA2C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0-1.066h44.8V9.6H0V-1.066z"
          fill="#F93939"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_81_10786">
          <Rect width={32} height={32} rx={16} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { AmFlagIcon };
