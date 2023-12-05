import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const MinusIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M4 12h16"
        stroke={color || Colors.purple['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export { MinusIcon };
