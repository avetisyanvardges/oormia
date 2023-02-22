import React from "react";
import { TouchableOpacity} from "react-native";
import Index from "../text";
import { styles } from "./buttonDefaultStyle";
import { normalize } from "../../assets/RootStyles/normalize";










function Button({textButton="", icon="",  onClick, styleButton={}, textStyle={} }){





    return (
       <TouchableOpacity onPress={onClick} style={{...styles.buttonDefaultStyle, ...styleButton}} >
         {icon}
         <Index text={textButton}  style={{...styles.textStyle, ...textStyle}}/>
       </TouchableOpacity>
        )
}


export default Button