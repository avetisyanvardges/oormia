import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const PremiumIcon = ({ width, height, size, color, backgroundColor }) => {
  return (
    <Svg
      width={size || width || normalize(24)}
      height={size || height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M21.25 18.47l-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47c-.19.8-1.21 1.05-1.74.42l-2.99-3.44a.499.499 0 01.25-.81 8.492 8.492 0 004.53-2.83c.19-.23.53-.26.74-.05l2.22 2.22c.76.76.49 1.71-.27 1.89zM2.7 18.47l1.65.39c.37.09.66.37.74.74l.35 1.47c.19.8 1.21 1.05 1.74.42l2.99-3.44c.24-.28.11-.72-.25-.81a8.492 8.492 0 01-4.53-2.83.499.499 0 00-.74-.05l-2.22 2.22c-.76.76-.49 1.71.27 1.89zM12 2C8.13 2 5 5.13 5 9c0 1.45.43 2.78 1.17 3.89a6.985 6.985 0 004.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02A6.968 6.968 0 0019 9c0-3.87-3.13-7-7-7zm3.06 6.78l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 00-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.85-.83c-.49-.49-.33-.98.35-1.09l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.32-.64.84-.64 1.16 0l.59 1.18c.08.16.29.32.48.35l1.07.18c.67.11.83.6.34 1.09z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { PremiumIcon };
