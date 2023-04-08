import * as React from "react"
import Svg, { Path, Rect  } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";


function AppleIcon({width, height, colors}) {
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
                clipRule="evenodd"
                d="M21.042 7.083c.208 1.146-.313 2.292-.938 3.125-.625.834-1.77 1.563-2.916 1.459-.209-1.146.312-2.188.937-3.021.73-.833 1.875-1.458 2.917-1.563zm3.333 18.125c.52-.833.833-1.354 1.25-2.291-3.23-1.25-3.75-5.834-.52-7.5-.938-1.25-2.293-1.875-3.647-1.875-.937 0-1.562.208-2.187.416-.521.209-.938.313-1.459.313-.625 0-1.041-.209-1.666-.417s-1.25-.416-1.98-.416c-1.458 0-3.02.833-3.958 2.395-1.354 2.084-1.146 6.146 1.042 9.48.938 1.25 1.98 2.604 3.333 2.604.625 0 .938-.209 1.354-.313.521-.208 1.042-.416 1.876-.416.937 0 1.354.208 1.875.416.416.209.729.313 1.354.313 1.458 0 2.5-1.563 3.333-2.709z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
      )
}

export  {AppleIcon}


