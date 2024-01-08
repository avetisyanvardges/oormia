import React from 'react';
import { normalize } from 'assets/RootStyles/normalize';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const EnFlagIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || size || normalize(24)}
      height={height || size || normalize(24)}
      viewBox="0 0 32 32"
      fill="none">
      <G clipPath="url(#clip0_81_10793)">
        <Rect width={32} height={32} rx={16} fill="#fff" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h19.2v14.933H0V0z"
          fill="#1A47B8"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2 0v2.133h25.6V0H19.2zm0 4.267V6.4h25.6V4.267H19.2zm0 4.266v2.134h25.6V8.533H19.2zm0 4.267v2.133h25.6V12.8H19.2zM0 17.067V19.2h44.8v-2.133H0zm0 4.266v2.134h44.8v-2.134H0zM0 25.6v2.133h44.8V25.6H0zm0 4.267V32h44.8v-2.133H0z"
          fill="#F93939"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.133 2.134v2.133h2.134V2.134H2.133zm4.267 0v2.133h2.133V2.134H6.4zm4.267 0v2.133H12.8V2.134h-2.133zm4.266 0v2.133h2.134V2.134h-2.134zM12.8 4.267V6.4h2.133V4.267H12.8zm-4.267 0V6.4h2.134V4.267H8.533zm-4.266 0V6.4H6.4V4.267H4.267zM2.133 6.4v2.134h2.134V6.4H2.133zm4.267 0v2.134h2.133V6.4H6.4zm4.267 0v2.134H12.8V6.4h-2.133zm4.266 0v2.134h2.134V6.4h-2.134zm-12.8 4.267V12.8h2.134v-2.133H2.133zm4.267 0V12.8h2.133v-2.133H6.4zm4.267 0V12.8H12.8v-2.133h-2.133zm4.266 0V12.8h2.134v-2.133h-2.134zM12.8 8.534v2.133h2.133V8.534H12.8zm-4.267 0v2.133h2.134V8.534H8.533zm-4.266 0v2.133H6.4V8.534H4.267z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_81_10793">
          <Rect width={32} height={32} rx={16} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { EnFlagIcon };
