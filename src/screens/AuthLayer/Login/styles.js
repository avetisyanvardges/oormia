import { StyleSheet } from "react-native";
import { normalize } from "../../../assets/RootStyles/normalize";
import { Colors } from "../../../assets/RootStyles";
import { FontStyle } from "../../../assets/RootStyles";

export const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        padding: normalize(16),
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
        marginTop: normalize(-10),
        marginBottom: normalize(9)
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
        marginTop: normalize(35),
        marginBottom: normalize(44),
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
        backgroundColor: Colors.black[50],
        marginBottom: normalize(13)
    },
    appleText: {
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
    googleText: {
        color: Colors.grey[1200],
        ...FontStyle.text_h5.regular
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
        color: Colors.lilac,
    },
    dontHave:{
        color: Colors.black[100],
        ...FontStyle.display_h6.medium,
        fontSize: normalize(12),
        lineHeight: normalize(15),
    }
})