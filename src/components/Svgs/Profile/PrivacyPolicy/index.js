import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors} from 'assets/RootStyles';

const PrivacyPolicyIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M10.49 2.23L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0z"
        stroke={color || Colors.oxford_blue['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {PrivacyPolicyIcon};