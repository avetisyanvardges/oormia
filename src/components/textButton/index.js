import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "../text";




function Index({text="", textStyle={}, buttonStyle={}, onClick, icon=""}){



    return (
        <TouchableOpacity style={{...buttonStyle, flexDirection:"row",alignItems:"center", }} onPress={onClick}>
            {icon}
            <Text text={ text} style={textStyle} />
        </TouchableOpacity>
    )
}


export default  Index