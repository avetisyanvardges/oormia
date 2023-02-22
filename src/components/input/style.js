import {StyleSheet} from "react-native";
import {normalize} from "../../assets/RootStyles/normalize";

const styles = StyleSheet.create({
    container: {
      
        // paddingLeft: normalize(24),
        // paddingRight: normalize(21),
        // flexDirection: 'row',
        // borderRadius: normalize(10),
        // alignItems: 'center',
        // paddingVertical: normalize(10, true),
        // backgroundColor: 'blue',
        // justifyContent: 'space-between',
    },
    inputDefault: {
        width: normalize(326),
        height: normalize(38),
        borderRadius: normalize(12),
        backgroundColor: "#F3F3F3",
    },
    textStyle: {
        // width: RW(330),
        // paddingVertical: 0,
        // ...font('regular', 16, WHITE, 18),
    },
})

export default styles;
