import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {normalize} from "../../../RootStyles/normalize";


function FbIcon(props) {

    return (
        <Svg
            width={props.width ? normalize(props.width) : normalize(10)}
            height={props.height ? normalize(props.height) : normalize(19)}
            viewBox="0 0 10 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.798 3.355h1.68V.43A21.69 21.69 0 007.03.3C4.608.3 2.95 1.823 2.95 4.623V7.2H.276v3.27h2.672v8.23h3.277v-8.229h2.565l.407-3.27H6.225V4.948c.001-.946.256-1.593 1.573-1.593z"
                fill="#000"
            />
        </Svg>
    )
}


export default FbIcon
