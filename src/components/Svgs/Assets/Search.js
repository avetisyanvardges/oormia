import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function Search({width, height, colors}) {
    return (
        <Svg
            width={normalize(width|| 24)}
            height={normalize(height || 24)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
                stroke="#D9D9D9"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
export {Search}
