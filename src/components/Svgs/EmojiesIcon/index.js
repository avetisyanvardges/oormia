import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { normalize } from 'assets/RootStyles/normalize';

function EmojiIcon({ width, height }) {
  return (
    <Svg
      width={width || normalize(21)}
      height={height || normalize(21)}
      viewBox="0 0 21 21"
      fill="none">
      <Path
        d="M10.5 0C16.299 0 21 4.701 21 10.5S16.299 21 10.5 21 0 16.299 0 10.5 4.701 0 10.5 0zm0 1.853a8.647 8.647 0 100 17.294 8.647 8.647 0 000-17.294zm3.788 11.187c.371.353.386.94.033 1.31-.209.22-.564.517-1.055.808a5.382 5.382 0 01-2.766.777 5.382 5.382 0 01-2.766-.777 5.021 5.021 0 01-1.055-.808.926.926 0 011.24-1.369l.243.222c.122.102.296.23.516.36.551.326 1.163.52 1.822.52s1.27-.194 1.822-.52c.22-.13.394-.258.516-.36l.14-.13a.926.926 0 011.31-.033zM7.566 7.103a1.39 1.39 0 110 2.78 1.39 1.39 0 010-2.78zm5.868 0a1.39 1.39 0 110 2.78 1.39 1.39 0 010-2.78z"
        fill="#AFADAD"
      />
    </Svg>
  );
}

export default EmojiIcon;
