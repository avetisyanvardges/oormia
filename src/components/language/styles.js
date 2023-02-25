import {StyleSheet} from "react-native";
import {Fonts} from "assets/RootStyles";
import {normalize} from "assets/RootStyles/normalize";

export const styles = StyleSheet.create({
        body:{
            flexDirection:'row',
            width:'100%',
            justifyContent:'flex-end',
        },
        text: {
            marginHorizontal:normalize(5),
            fontFamily: Fonts.arm.regular,
        },
    });
export default styles;
