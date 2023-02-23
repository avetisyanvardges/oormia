import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';

const Compass = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(36)}
      height={height || normalize(36)}
      viewBox="0 0 36 36"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.624 13.198c.375-1.126-.696-2.197-1.822-1.822l-7.886 2.629a1.44 1.44 0 00-.91.91l-2.63 7.887c-.375 1.126.696 2.197 1.822 1.822l7.886-2.63c.43-.142.768-.48.911-.91l2.629-7.886zm-8.257 3.17l4.898-1.633-1.632 4.898-4.898 1.632 1.632-4.898z"
        fill="#99A2AD"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 2.7C9.55 2.7 2.7 9.55 2.7 18c0 8.45 6.85 15.3 15.3 15.3 8.45 0 15.3-6.85 15.3-15.3 0-8.45-6.85-15.3-15.3-15.3zM5.4 18c0-6.959 5.641-12.6 12.6-12.6S30.6 11.041 30.6 18 24.959 30.6 18 30.6 5.4 24.959 5.4 18z"
        fill="#99A2AD"
      />
    </Svg>
  );
};

export {Compass};
