import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={102}
      height={40}
      viewBox="0 0 102 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={101}
        height={39}
        rx={12.5}
        fill="#fff"
        stroke="#E3E3E3"
      />
    </Svg>
  )
}

export default SvgComponent