import {StyleSheet} from "react-native";
import {normalize} from "../../assets/RootStyles/normalize";

const styles = StyleSheet.create({
    container: {
        marginBottom: normalize(15),
        justifyContent: "flex-start",
        height: normalize(63),
    },
    inputContainerDef:{
        width: normalize(326),
        height: normalize(38),
        backgroundColor: "#F3F3F3",
        borderRadius: normalize(12),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10
        
    },
    inputDefault: {
        width: normalize(290),
        fontSize: normalize(14),
        lineHeight: normalize(17),
        paddingLeft: normalize(14), 
    },
    textStyle: {
        // width: RW(330),
        // paddingVertical: 0,
        // ...font('regular', 16, WHITE, 18),
    },
})

export default styles;
