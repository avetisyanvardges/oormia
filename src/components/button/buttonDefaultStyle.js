import { StyleSheet } from "react-native"
import { Colors,globalStyles,BorderStyles } from "../../assets/RootStyles";
import { Button } from "../../assets/Theme";


export const styles = StyleSheet.create({
    buttonDefaultStyle: {
        width: 100,
        height: 38,
        background: Colors.white,
        borderWidth: BorderStyles.widths.normal,
        borderColor: BorderStyles.color,
        borderRadius: BorderStyles.radius.s,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonMediumStyle: {
        width: 326,
        height: 38,
        borderRadius: BorderStyles.radius.s,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "(121.46deg, #71EEFB 12.44%, #A679FF 56%, #A433A6 99.56%)"
    }
})