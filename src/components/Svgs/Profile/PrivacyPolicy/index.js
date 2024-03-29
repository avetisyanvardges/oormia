import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const PrivacyPolicyIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20.41 6.961v1.83c0 .64-.3 1.24-.82 1.61l-11 8.06c-.71.52-1.68.52-2.38-.01l-1.44-1.08c-.65-.49-1.18-1.55-1.18-2.36v-8.05c0-1.12.86-2.36 1.91-2.75l5.47-2.05c.57-.21 1.49-.21 2.06 0l5.47 2.05c1.05.39 1.91 1.63 1.91 2.75zM18.822 12.341c.66-.48 1.59-.01 1.59.81v1.88c0 .81-.53 1.86-1.18 2.35l-5.47 4.09c-.48.35-1.12.53-1.76.53-.64 0-1.28-.18-1.76-.54l-.83-.62a.997.997 0 01.01-1.61l9.4-6.89z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { PrivacyPolicyIcon };
