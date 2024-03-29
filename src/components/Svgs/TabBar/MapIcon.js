import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const MapIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M7.63 3.57c.178-.098.37.052.37.257v13.556c0 .223-.153.412-.35.516a1.448 1.448 0 00-.02.01l-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73l4.33-2.48zM14.722 6.103A.5.5 0 0115 6.55v13.153a.5.5 0 01-.717.45l-4.25-2.047a.5.5 0 01-.283-.45V4.447a.5.5 0 01.722-.449l4.25 2.105zM22 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-3.491 2.001a.5.5 0 01-.749-.434V6.33a.5.5 0 01.252-.434L19.01 4.75C20.65 3.81 22 4.59 22 6.49z"
        fill={color || Colors.purple['500']}
      />
    </Svg>
  );
};

export { MapIcon };
