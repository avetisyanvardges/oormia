import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { normalize } from "../../../RootStyles/normalize";

function ArrowRight(props) {
  return (
    <Svg
    width={props.width ? normalize(props.width): normalize(9)}
    height={props.height ? normalize(props.height): normalize(13)}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.868 12.643a.642.642 0 00.064-.849l-.064-.073L2.542 6.5l5.326-5.221a.642.642 0 00.064-.848L7.868.358a.675.675 0 00-.866-.064l-.074.064-5.796 5.681a.642.642 0 00-.064.849l.064.073 5.796 5.681c.26.255.68.255.94 0z"
        fill="#818195"
      />
    </Svg>
  )
}

export default ArrowRight