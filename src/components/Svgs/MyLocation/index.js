import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const MyLocationIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={size || width || normalize(24)}
      height={size || height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M17.02 21.292l-3.48-1.74c-.97-.48-2.1-.48-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54c.11-.21.29-.38.51-.48l12.64-5.7c.52-.23 1.13-.02 1.39.48l3.81 7.24c1.56 2.95-1.58 6.16-4.56 4.67zM15.6 7.69l-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77c1.29-2.45 4.79-2.45 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { MyLocationIcon };
