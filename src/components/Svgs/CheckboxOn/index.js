import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

const CheckboxOnIcon = ({ width, height, size, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 28 28"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12zm6.207-14.793a1 1 0 00-1.414-1.414L12 16.586l-2.793-2.793a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l7.5-7.5z"
        fill="#5DBA2F"
      />
    </Svg>
  );
};

export { CheckboxOnIcon };
