import { Button } from "assets/Theme";
import React from "react";
import { View, StyleSheet, Button } from "react-native";



function ButtonMain({styles="", props}){

const buttonStyle = styles ? styles: defaultStyle.container


    return (
        <Button style={buttonStyle} {...props}/>
    )
}



const defaultStyle = StyleSheet({
    container: {

    }
})