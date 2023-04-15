import React from "react";
import { normalize } from "assets/RootStyles/normalize";
import { Colors } from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";
import { StyleSheet } from "react-native";


export const styles =StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:normalize(10),
        justifyContent:'space-between'
    },
    body:{
      padding:normalize(10),
    },
    goBackBlock:{
        marginVertical:normalize(20),
        flexDirection:'row',
        alignItems:"center"
    },
    title:{
        ...FontStyle.text_h3.regular,
        color: Colors.black[100],
    },

})
