import { StyleSheet } from "react-native";
import { normalize } from "../../assets/RootStyles/normalize";
import { BorderStyles } from "../../assets/RootStyles";
import { FontStyle } from "../../assets/RootStyles";



export const styles = StyleSheet.create({
    container:{
       
        alignItems: "center"
    },

    containerText: {
       width: "100%",
        alignItems: "flex-start",
        
    },

    textCodV: {
        marginLeft:25,
        marginTop:46,
        ...FontStyle.display_h4.medium,
        color:"#2C2C2C"

       
    },
    textEnterV:{
        marginTop: 25,
         marginLeft:25,
         ...FontStyle.display_h6.regular,
         color:"#818195"
    },

    containerItem:{
        width: "100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"space-between",
        marginTop: normalize(11),
        marginBottom: normalize(12),
        marginRight: normalize(27),
        marginLeft:normalize(25),
        paddingLeft:normalize(17)
        
        
    },
    item:{
        width: normalize(68),
        height: normalize(68),
        borderRadius:  BorderStyles.radius.ss,
        backgroundColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: "center",
        marginRight: normalize(17),    
    },

    timer: {
        ...FontStyle.text_h6.medium,
        color: "#A347FF"
        
    }
})