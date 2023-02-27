import { StyleSheet } from "react-native";
import { normalize } from "assets/RootStyles/normalize";
import { Colors } from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";

export const styles = StyleSheet.create({
    screenMask: {
       alignItems: "center",
       paddingVertical: normalize(10)
    },
    nextContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    container: {
        marginTop: normalize(30)
    },
    imgContainer: {
        marginVertical: normalize(15),
    },
    checkbox: {
        width : normalize(40),
        height: normalize(40),
        backgroundColor: "#60C8C0",
        borderRadius: normalize(50),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: normalize(20),
        left: normalize(5),
        zIndex: 1000
    },
    imgText: {
        color:"white",
        fontSize: normalize(20),
        position: "absolute",
        top: normalize(120),
        left: normalize(5),
        zIndex: 1000
    },
    places: {
        color: "white",
        position: "absolute",
        top: normalize(150),
        left: normalize(5),
        zIndex: 1000
    }
})