import * as React from "react";
import Svg, {Path, Rect} from "react-native-svg";
import {normalize} from "assets/RootStyles/normalize";


function FbIcon({width, height, colors}) {
    return (
        <Svg
            width={normalize(width) || normalize(35)}
            height={normalize(height) || normalize(35)}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Rect width={35} height={35} rx={10}  fill={colors || "#0A2540"} />
            <Path
                d="M19.583 14.688v3.02h2.709c.208 0 .312.209.312.417l-.416 1.98c0 .103-.209.207-.313.207h-2.292v7.605h-3.125v-7.5h-1.77c-.209 0-.313-.105-.313-.313v-1.979c0-.208.104-.313.313-.313h1.77v-3.437c0-1.77 1.355-3.125 3.125-3.125h2.813c.208 0 .312.104.312.313v2.5c0 .208-.104.312-.312.312h-2.5c-.209 0-.313.104-.313.313z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M20.625 27.917h-6.25c-5.208 0-7.292-2.084-7.292-7.292v-6.25c0-5.208 2.084-7.292 7.292-7.292h6.25c5.208 0 7.292 2.084 7.292 7.292v6.25c0 5.208-2.084 7.292-7.292 7.292z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}


export  {FbIcon}
