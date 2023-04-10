import {StyleSheet} from "react-native";
import {normalize} from "assets/RootStyles/normalize";
import {Colors, FontStyle} from "assets/RootStyles";

export const styles = StyleSheet.create({
    screenMask:{
        padding: normalize(20),
        alignItems: "center",
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    btnBlock:{
        width:'100%',
        flexDirection:'row',
        alignItems:"center",
    },
    textReset: {
        marginLeft:'auto',
        marginRight:'auto',
        ...FontStyle.display_h4.medium,
        fontSize: normalize(16),
        color: Colors.black[100]
    },
    text:{
        textAlign:'center',
        ...FontStyle.text_h5.regular,
        fontSize: normalize(10),
        lineHeight: normalize(12),
        color: Colors.grey[1200],
        marginBottom: normalize(28),
        // marginTop: normalize(7)
    },
    buttonStyle: {
        width: normalize(328),
        height: normalize(38),
        backgroundColor: Colors.blue[900],
        marginTop: normalize(7)
    },
    buttonTextStyle: {
        fontSize: normalize(14),
        lineHeight: normalize(17),
        color: Colors.white,
    },
});

