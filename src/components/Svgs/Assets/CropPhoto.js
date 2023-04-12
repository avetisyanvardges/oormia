import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function CropPhoto({width, height, colors}) {
    return (
        <Svg
            width={normalize(width|| 45)}
            height={normalize(height || 45)}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle cx={22.5} cy={22.5} r={22.5} fill={colors||"#0A2540"}/>
            <Path
                d="M22.615 23.247a.93.93 0 00-.23 0 3.133 3.133 0 01-3.028-3.133c0-1.735 1.399-3.143 3.143-3.143a3.14 3.14 0 01.115 6.277zM28.96 29.573a9.52 9.52 0 01-6.46 2.51 9.52 9.52 0 01-6.46-2.51c.097-.901.672-1.783 1.697-2.473 2.626-1.744 6.92-1.744 9.526 0 1.025.69 1.6 1.572 1.696 2.473z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M22.5 32.083a9.583 9.583 0 009.583-9.583 9.583 9.583 0 10-19.166 0 9.583 9.583 0 009.583 9.583z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export {CropPhoto}
