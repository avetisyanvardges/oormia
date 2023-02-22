import React from "react";
import {TouchableOpacity} from "react-native";
import Text from "../text";
import {styles} from "./style";

function Button({textButton = "", icon = "", onClick, styleButton = {}, textStyle = {}}) {

    return (
        <TouchableOpacity onPress={onClick} style={{...styles.buttonDefaultStyle, ...styleButton}}>
            {icon}
            <Text text={textButton} style={{...styles.textStyle, ...textStyle}}/>
        </TouchableOpacity>
    )
}

export default Button
