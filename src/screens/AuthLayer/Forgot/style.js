import {StyleSheet} from "react-native";
import {normalize} from "assets/RootStyles/normalize";
import {Colors} from "assets/RootStyles";
import { FontStyle } from "assets/RootStyles";

export const styles = StyleSheet.create({
    screenMask: {
        paddingTop: normalize(20),
        alignItems: "center"
    },
    firstText: {
        ...FontStyle.text_h5.regular,
        color: Colors.black[100],
        marginTop: normalize(20)
    },
    secondText: {
        ...FontStyle.text_h6.regular,
        fontSize: normalize(10),
        lineHeight: normalize(12),
        color: Colors.grey[1200],
        marginBottom: normalize(28),
        marginTop: normalize(7)
    },
    button: {
        width: normalize(328),
        height: normalize(38),
        backgroundColor: Colors.lilac,
    },
    buttonText: {
        fontSize: normalize(14),
        lineHeight: normalize(17),
        color: Colors.white,
    },
    line : {
        backgroundColor: Colors.grey[1100],
        width: normalize(328),
        height: normalize(1),
        marginVertical: normalize(20)
    }
})
