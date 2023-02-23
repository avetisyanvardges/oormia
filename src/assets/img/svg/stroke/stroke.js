import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {normalize} from "../../../RootStyles/normalize";

function Stroke(props) {
    return (
        <Svg
            width={props.width ? normalize(props.width) : normalize(11)}
            height={props.height ? normalize(props.height) : normalize(9)}
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.293 5a1 1 0 011.414 0l4.379 4.879a1 1 0 11-1.415 1.414L.293 6.414A1 1 0 01.293 5z"
                fill="#A347FF"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5.293a1 1 0 00-1.414 0L4.672 9.879a1 1 0 001.414 1.414L15.5 1.707a1 1 0 000-1.414z"
                fill="#A347FF"
            />
        </Svg>
    )
}

export default Stroke
