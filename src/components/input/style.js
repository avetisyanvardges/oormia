import {StyleSheet} from "react-native";
import {normalize} from "../../assets/RootStyles/normalize";

const styles = StyleSheet.create({
    container: {
        marginVertical: normalize(6),
        justifyContent: "flex-start",
    },
    inputContainerDef:{

        width: normalize(326),
        height: normalize(38),
        backgroundColor: "#F3F3F3",
        borderRadius: normalize(10),
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10,
        overflow:'hidden',
    },
    inputDefault: {
        width: normalize(290),
        fontSize: normalize(14),
        lineHeight: normalize(17),
        paddingLeft: normalize(14),
    },
    title:{
        marginBottom:normalize(10)
    },
    errBlock:{
        position:'absolute',
        width: '100%',
        bottom:0,
        height: normalize(3),
    },
    textStyle: {
        // width: RW(330),
        // paddingVertical: 0,
        // ...font('regular', 16, WHITE, 18),
    },
})

export default styles;
