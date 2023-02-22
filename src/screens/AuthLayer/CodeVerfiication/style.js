import {StyleSheet} from "react-native";
import {normalize} from "../../../assets/RootStyles/normalize";
import {BorderStyles} from "../../../assets/RootStyles";
import {FontStyle} from "../../../assets/RootStyles";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    containerText: {
        width: "100%",
        alignItems: "flex-start",
    },
    textCodV: {
        marginLeft: 25,
        marginTop: 46,
        fontWeight: normalize(500),
        fontSize: normalize(16),
        lineHeight: normalize(20),
        color: "#2C2C2C"
    },
    textEnterV: {
        marginTop: 25,
        marginLeft: 25,
        color: "#818195",
        fontWeight: normalize(400),
        fontSize: normalize(12),
        lineHeight: normalize(15)
    },
    containerItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "space-between",
        marginTop: normalize(11),
        marginBottom: normalize(12),
        marginRight: normalize(27),
        marginLeft: normalize(25),
        paddingLeft: normalize(17)
    },
    item: {
        width: normalize(68),
        height: normalize(68),
        borderRadius: BorderStyles.radius.ss,
        backgroundColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: "center",
        marginRight: normalize(17),
    },
    timer: {
        fontWeight: normalize(500),
        fontSize: normalize(12),
        lineHeight: normalize(15),
        color: "#A347FF",
        marginBottom: 40
    },
    keyboardContainer: {
        borderTopWidth: 0.5,
        borderTopColor: "#E3E3E3",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    numberContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
        marginTop: normalize(35)
    },
    arrowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: normalize(53)
    },
    arrowStyle: {
        color: "#818195"
    },
    numberTextStyle: {
        fontWeight: normalize(500),
        fontSize: normalize(20),
        lineHeight: normalize(24)
    }
})
