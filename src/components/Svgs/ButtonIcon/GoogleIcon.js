import * as React from "react"
import Svg, {G, Path, Defs, ClipPath, Rect} from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";

function GoogleIcon({width, height, colors}) {
  return (
      <Svg
          width={normalize(width) || normalize(35)}
          height={normalize(height) || normalize(35)}
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <Rect width={35} height={35} rx={10} fill="#0A2540" />
        <Path
            d="M27.5 15.625h-9.792v3.854h5.73c-.105.938-.73 2.396-2.084 3.334-.833.625-2.083 1.041-3.646 1.041-2.708 0-5.104-1.77-5.937-4.375-.209-.625-.313-1.354-.313-2.083 0-.73.104-1.459.313-2.084.104-.208.104-.416.208-.52a6.21 6.21 0 015.73-3.75c1.978 0 3.228.833 4.062 1.562l2.916-2.916c-1.77-1.563-4.166-2.605-6.979-2.605-4.062 0-7.604 2.292-9.27 5.73-.73 1.458-1.147 3.02-1.147 4.687 0 1.667.417 3.23 1.146 4.688 1.667 3.437 5.209 5.729 9.271 5.729 2.813 0 5.209-.938 6.875-2.5 1.98-1.771 3.125-4.48 3.125-7.709 0-.833-.104-1.458-.208-2.083z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </Svg>
  )
}

export  {GoogleIcon}
