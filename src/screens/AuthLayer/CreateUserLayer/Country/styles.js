import React from "react";
import { normalize } from "assets/RootStyles/normalize";
import { Colors } from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";
import { StyleSheet } from "react-native";


export const styles =StyleSheet.create({
    body:{
      padding:normalize(10),
    },
    goBackBlock:{
        marginTop:normalize(20),
        flexDirection:'row',
        alignItems:"center"
    },
    title:{
        ...FontStyle.text_h3.regular,
        color: Colors.black[100],
        marginLeft:'auto',
        marginRight:'auto',
    },

})
