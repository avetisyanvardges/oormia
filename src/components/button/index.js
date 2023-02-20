import React from "react";
import { TouchableOpacity} from "react-native";
import Index from "../text";
import ButtonSvg from "../..//assets/svg/buttonSvg";
import { styles } from "./buttonDefaultStyle"; 









function ButtonMy({textButton="", svgIcon="", svgIconType="", onClick, styleButton="",  }){


const style = styleButton ? styleButton:  styles
console.log(svgIconType)

    return (
       <TouchableOpacity onPress={onClick} style={styles.buttonDefaultStyle} >
         <ButtonSvg type={svgIconType}/>
         <Index text={textButton}  style={{marginLeft: 10}}/>
         
       </TouchableOpacity>
        )
}


export default ButtonMy