import { StyleSheet } from "react-native";
import { normalize } from "assets/RootStyles/normalize";
import { Colors } from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";

export const styles = StyleSheet.create({
    container: {
        padding: normalize(16),
        width:'100%'
    },
    textStyle: {
        alignSelf: "flex-start",
        marginBottom: normalize(16),
        marginLeft: normalize(5),
        ...FontStyle.display_h4.medium,
        fontSize: normalize(16),
        lineHeight: normalize(20),
        color: Colors.black[100]
    },
    inputContainer: {
        marginBottom: normalize(10)
    },
    buttonStyle: {
        width: normalize(328),
        height: normalize(38),
        backgroundColor: Colors.lilac,
        marginTop: normalize(7)
    },
    buttonTextStyle: {
        fontSize: normalize(14),
        lineHeight: normalize(17),
        color: Colors.white,
    },
    forgotText : {
        color: Colors.black[100],
        marginLeft: normalize(7),
    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical:normalize(10)
    },
    or: {
        borderWidth: 1,
        borderColor: Colors.grey[1100],
        width: normalize(142)
    },
    orText: {
        marginHorizontal: normalize(8),
        color: Colors.black[100],
        ...FontStyle.text_h5.medium
    },
    buttonApple: {
        width: normalize(326),
        height: normalize(38),
        marginBottom: normalize(13),
        backgroundColor: Colors.black[50],
    },
    appleGoogleText: {
        color: Colors.grey[1200],
        ...FontStyle.text_h5.regular
    },
    buttonGoogle: {
        width: normalize(326),
        height: normalize(38),
        justifyContent: "flex-start",
        paddingLeft: normalize(15),
        marginBottom: normalize(13)
    },
    fbVkContainer: {
        flexDirection:"row",
    },
    signInTextContainer: {
        width: normalize(326),
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: normalize(20),
        marginBottom: normalize(20)
    },
    signInText: {
        marginVertical:normalize(10),
        color: Colors.lilac,
    },
    dontHave:{
        color: Colors.black[100],
        ...FontStyle.display_h6.medium,
        fontSize: normalize(12),
        lineHeight: normalize(15),
    }
})
