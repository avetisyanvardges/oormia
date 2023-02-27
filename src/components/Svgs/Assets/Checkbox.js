import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function Checkbox({width,color}) {
    return (
        <Svg
            width={normalize(width || 12)}
            height={normalize(width/4*3 || 9)}
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.217 3.705a.741.741 0 011.048 0L4.51 7.321a.741.741 0 01-1.048 1.048L.217 4.753a.741.741 0 010-1.048z"
                fill={color || "#A347FF"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.487.217a.741.741 0 00-1.048 0L3.462 7.321A.741.741 0 004.51 8.369l6.977-7.104a.741.741 0 000-1.048z"
                fill={color || "#A347FF"}
            />
        </Svg>
    )
}

export {Checkbox}
