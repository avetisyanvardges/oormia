import { StyleSheet } from "react-native"
import { Colors,globalStyles,BorderStyles } from "../../assets/RootStyles";




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
    }
})