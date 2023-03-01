import { StyleSheet } from "react-native";
import { normalize } from "assets/RootStyles/normalize";
import { Colors } from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";

export const styles = StyleSheet.create({
    image:{
        width: normalize(330),
        height:normalize(200),
        padding:normalize(13),
        justifyContent:'space-between'
    },
    flatList:{
      marginTop:normalize(10),
    },
    title:{
        ...FontStyle.display_h6.bold,
        lineHeight:normalize(20),
        fontSize:normalize(18),
        color:Colors.black[50]
    },
    nav:{
        ...FontStyle.display_h6.bold,
        fontSize:normalize(16),
        color:Colors.black[50]
    },
    screenMask: {
       alignItems: "center",
       padding: normalize(13)
    },
    nextContainer: {
        alignItems:'center',
        height:normalize(30),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        marginTop: normalize(30)
    },
    imgContainer: {
        borderRadius:normalize(20),
        marginVertical: normalize(10),
    },
    text:{
        color:Colors.white,
        ...FontStyle.display_h4.medium,
    },
    imgTitle: {
        fontSize: normalize(20),
        lineHeight:normalize(20)
    },
    places: {
        fontSize: normalize(16),
        color: Colors.grey[1200],
        lineHeight:normalize(20)
    }
})
