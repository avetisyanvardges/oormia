import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

function SelectIcon(props) {
  return (
    <Svg
      width={props.width || normalize(24)}
      height={props.height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke={props.color || Colors.green['600']}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.74 15.53L14.26 12l-3.52-3.53"
        stroke={props.color || Colors.green['600']}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SelectIcon;
