import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function EyeOpen({width, height, colors}) {
    return (
        <Svg
            width={normalize(width || 23)}
            height={ normalize(height || 23)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.003 4c4.136.003 7.85 2.902 9.936 7.757a.743.743 0 010 .591c-2.085 4.855-5.8 7.754-9.936 7.757h-.006c-4.136-.003-7.85-2.902-9.936-7.757a.751.751 0 010-.591C4.147 6.903 7.86 4.004 11.997 4h.006zM12 5.5c-3.436.002-6.57 2.444-8.43 6.553 1.86 4.108 4.993 6.552 8.43 6.552 3.437 0 6.57-2.444 8.43-6.553-1.86-4.107-4.993-6.55-8.43-6.551zm0 2.641a3.917 3.917 0 013.912 3.912A3.915 3.915 0 0112 15.963a3.915 3.915 0 01-3.911-3.91 3.916 3.916 0 013.91-3.912zm0 1.5a2.414 2.414 0 00-2.411 2.412 2.413 2.413 0 002.41 2.41 2.414 2.414 0 002.413-2.41A2.415 2.415 0 0012 9.641z"
                fill={colors || "#818195"}
            />
        </Svg>
    )
}

export {EyeOpen}
