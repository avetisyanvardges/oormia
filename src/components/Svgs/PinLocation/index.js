import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const PinLocationIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 49 49"
      fill="none">
      <Path
        d="M17.419 5.996a14.066 14.066 0 0114.362.118c4.376 2.72 7.035 7.574 7.01 12.795-.102 5.187-2.953 10.062-6.517 13.831a38.235 38.235 0 01-6.858 5.758c-.257.149-.539.248-.831.294a1.674 1.674 0 01-.798-.242 37.803 37.803 0 01-9.879-9.285 18.945 18.945 0 01-3.7-10.616l.01-.559c.186-5.014 2.9-9.595 7.2-12.094zm8.933 8.367a4.79 4.79 0 00-5.296 1.06 5.012 5.012 0 00-1.06 5.391c.75 1.85 2.522 3.057 4.487 3.057a4.776 4.776 0 003.436-1.432 4.957 4.957 0 001.418-3.496c.007-2.001-1.171-3.81-2.985-4.58z"
        fill={color || Colors.purple['500']}
      />
      <Path
        opacity={0.4}
        d="M24.5 44.917c5.638 0 10.208-.915 10.208-2.042 0-1.128-4.57-2.042-10.208-2.042s-10.209.914-10.209 2.042c0 1.127 4.57 2.042 10.209 2.042z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { PinLocationIcon };
