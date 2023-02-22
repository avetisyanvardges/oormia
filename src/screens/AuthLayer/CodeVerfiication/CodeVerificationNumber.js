import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../../components/text";


function CodeVerificationNumber({numberText, numberTextStyle, numberContainerStyle, onClick}){

    return (
            <TouchableOpacity style={numberContainerStyle} onPress={()=> onClick(numberText)}>
                <Text text={numberText} style={numberTextStyle} />
            </TouchableOpacity>
    )
}

export default CodeVerificationNumber
