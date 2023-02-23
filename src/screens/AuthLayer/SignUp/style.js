import {StyleSheet} from "react-native";
import {normalize} from "../../../assets/RootStyles/normalize";
import {Colors} from "../../../assets/RootStyles";
import { FontStyle } from "../../../assets/RootStyles";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: normalize(20)
    },
    textStyle: {
        alignSelf: "flex-start",
        marginLeft: normalize(25),
        marginBottom: normalize(17),
        fontSize: normalize(16),
        lineHeight: normalize(20)
    },
    inputContainerStyle: {
        marginBottom: normalize(15),
        justifyContent: "flex-start",
        height: normalize(63)
    },
    bottomContainer: {
        marginTop: normalize(18),
        alignItems: "center"
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
    signInButton: {
        marginLeft: normalize(110)
    },
    textButtonText: {
        color: Colors.black[100],
        ...FontStyle.display_h6.medium,
        fontSize: normalize(12),
        lineHeight: normalize(15),
    }
})
