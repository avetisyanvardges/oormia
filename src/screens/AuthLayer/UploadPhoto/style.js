import React from "react";
import { normalize } from "assets/RootStyles/normalize";
import { Colors } from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";
import { StyleSheet } from "react-native";


export const styles =StyleSheet.create({
    imgDef:{
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 50,
    },
    title:{
      ...FontStyle.display_h6.regular,
        marginTop:normalize(15),
    },
    btn:   {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 40
    },
    imgContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        borderRadius: normalize(50),
        marginHorizontal: normalize(20),
        marginVertical: normalize(30)
    },
    buttonStyle: {
        width: normalize(328),
        height: normalize(38),
        backgroundColor: Colors.lilac,
        marginTop: normalize(15),
        marginBottom: normalize(9)
    },
})
