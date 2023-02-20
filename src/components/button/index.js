import React from "react";
import { TouchableOpacity} from "react-native";
import Index from "../text";
import { styles } from "./buttonDefaultStyle";
import { normalize } from "../../assets/RootStyles/normalize";









function ButtonMy({textButton="", icon="",  onClick, styleButton={},  }){


const style = styleButton ? styleButton:  styles


    return (
       <TouchableOpacity onPress={onClick} style={{...styles.buttonDefaultStyle, ...styleButton}} >
         {icon}
         <Index text={textButton}  style={{marginLeft: normalize(10)}}/>
       </TouchableOpacity>
        )
}


export default ButtonMy