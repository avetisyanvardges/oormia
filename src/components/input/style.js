import {StyleSheet} from "react-native";
import {normalize} from "../../assets/RootStyles/normalize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        maxHeight: normalize(44, true),
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
        width: '100%',
        height: '100%',
    },
    textStyle: {
        // width: RW(330),
        // paddingVertical: 0,
        // ...font('regular', 16, WHITE, 18),
    },
})

export default styles;
