import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

function MoreOptionsIcon({ width, height }) {
  return (
    <Svg
      width={width || normalize(6)}
      height={height || normalize(24)}
      viewBox="0 0 6 24"
      fill="none">
      <Path
        d="M3 20a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2zM0 21a3 3 0 116 0 3 3 0 01-6 0zm0-8a3 3 0 116 0 3 3 0 01-6 0zM3 2a3 3 0 100 6 3 3 0 000-6z"
        fill="#fff"
      />
      <Path
        d="M3 20a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2zM0 21a3 3 0 116 0 3 3 0 01-6 0zm0-8a3 3 0 116 0 3 3 0 01-6 0zM3 2a3 3 0 100 6 3 3 0 000-6z"
        stroke="#fff"
      />
    </Svg>
  );
}

export default MoreOptionsIcon;
