import React from 'react';
import { normalize } from 'assets/RootStyles/normalize';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const RuFlagIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 32 32"
      fill="none">
      <G clipPath="url(#clip0_81_10797)">
        <Rect width={32} height={32} rx={16} fill="#1A47B8" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-4.267 21.333h44.8V32h-44.8V21.333z"
          fill="#F93939"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-4.267 0h44.8v10.667h-44.8V0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_81_10797">
          <Rect width={32} height={32} rx={16} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { RuFlagIcon };
