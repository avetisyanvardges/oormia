import { StyleSheet } from "react-native"
import { Colors,BorderStyles } from "../../assets/RootStyles";
import { normalize } from "../../assets/RootStyles/normalize";

export const styles = StyleSheet.create({
    buttonDefaultStyle: {
        width: normalize(100),
        height: normalize(38),
        background: Colors.white,
        borderWidth: BorderStyles.widths.normal,
        borderColor: Colors.grey[1100],
        borderRadius: BorderStyles.radius.ss,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle:{
        marginLeft: normalize(10)
    }
})
