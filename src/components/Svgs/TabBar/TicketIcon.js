import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const TicketIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M22 10.75c.41 0 .75-.34.75-.75V9c0-4.41-1.34-5.75-5.75-5.75h-6.25V5.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.25H7C2.59 3.25 1.25 4.59 1.25 9v.5c0 .41.34.75.75.75.96 0 1.75.79 1.75 1.75S2.96 13.75 2 13.75c-.41 0-.75.34-.75.75v.5c0 4.41 1.34 5.75 5.75 5.75h2.25V18.5c0-.41.34-.75.75-.75s.75.34.75.75v2.25H17c4.41 0 5.75-1.34 5.75-5.75 0-.41-.34-.75-.75-.75-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75zm-11.25 3.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.83c0-.41.34-.75.75-.75s.75.34.75.75v4.34z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { TicketIcon };
