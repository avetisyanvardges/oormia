import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const RequestIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5zM16.72 10.35l-.96-.96c.5-.75.79-1.65.79-2.62A4.77 4.77 0 0011.78 2C9.15 2 7 4.14 7 6.77c0 2.63 2.14 4.77 4.77 4.77.97 0 1.87-.29 2.62-.79l.96.96c.19.19.44.28.68.28.25 0 .5-.09.68-.28.38-.37.38-.98.01-1.36z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { RequestIcon };