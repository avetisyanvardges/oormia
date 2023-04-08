import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function Linkedin({width, height, colors}) {
    return (
        <Svg
            width={normalize(width) || normalize(35)}
            height={normalize(height) || normalize(35)}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Rect width={35} height={35} rx={10} fill={colors || "#0A2540"} />
            <Path
                d="M16.8 25.19c0 .486-.32.81-.8.81h-3.2c-.48 0-.8-.324-.8-.81v-9.714c0-.486.32-.81.8-.81H16c.48 0 .8.325.8.81v9.714zm-2.4-11.333c-1.36 0-2.4-1.052-2.4-2.428C12 10.052 13.04 9 14.4 9c1.36 0 2.4 1.052 2.4 2.429 0 1.376-1.04 2.428-2.4 2.428zM28 25.191c0 .485-.32.809-.8.809h-2.4c-.48 0-.8-.324-.8-.81V19.93c0-.648-.56-1.215-1.2-1.215-.64 0-1.2.567-1.2 1.215v5.261c0 .486-.32.81-.8.81h-2.4c-.48 0-.8-.324-.8-.81v-9.714c0-.486.32-.81.8-.81h3.2c.24 0 .4.082.56.243.48-.161.96-.242 1.44-.242 2.4 0 4.4 2.024 4.4 4.452v6.072z"
                fill="#fff"
            />
            <Rect x={5.5} y={5.5} width={24} height={24} rx={4.5} stroke="#fff" />
        </Svg>
    )
}

export {Linkedin};
