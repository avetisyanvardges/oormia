import {StyleSheet} from "react-native";
import {normalize} from "assets/RootStyles/normalize";
import {Colors} from "assets/RootStyles";
import {FontStyle} from "assets/RootStyles";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: normalize(20),
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
    inputContainerStyle: {
        marginBottom: normalize(15),
        justifyContent: "flex-start",
        height: normalize(63)
    },
    bottomContainer: {
        marginVertical: normalize(10),
        width: '100%',
        alignItems: "center",
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
        marginVertical:normalize(7),
    },
    signInText: {
        color: Colors.lilac,
    },
    forgot: {
        marginVertical: normalize(10),
    },
    signInButton: {
        marginLeft: normalize(110)
    },
    textButtonText: {
        textAlign:'center',
        color: Colors.black[100],
        ...FontStyle.display_h6.medium,
        fontSize: normalize(12),
        lineHeight: normalize(15),
        margin:0
    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: normalize(10),
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
})
