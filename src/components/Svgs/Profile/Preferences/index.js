import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors} from 'assets/RootStyles';

const PreferencesIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M15.39 5.21l1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.11-.46-.08-1.11-.41-1.45L6.7 11.92c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0zM8 5H2M5 19H2M3 12H2"
        stroke={color || Colors.oxford_blue['500']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {PreferencesIcon};