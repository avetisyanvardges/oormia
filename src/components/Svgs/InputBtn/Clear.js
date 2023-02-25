import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function Clear({width, height, color}) {
    return (
        <Svg
            width={normalize(width) ||normalize(12)}
            height={normalize(height) || normalize(12)}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M11 1L1 11M1 1l10 10"
                stroke={color || "#8E9BA7"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export {Clear}
