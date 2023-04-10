import {StyleSheet} from "react-native";
import {normalize} from "../../../assets/RootStyles/normalize";
import {BorderStyles} from "../../../assets/RootStyles";
import {FontStyle,Colors} from "../../../assets/RootStyles";

export const styles = StyleSheet.create({
    btnBlock:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    },
    screenMask:{
        padding: normalize(20),
        alignItems: "center",
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    container: {
        alignItems: "center",
    },
    containerText: {
        marginLeft:'auto',
        marginRight:'auto',
    },
    textCodV: {
       marginLeft:'auto',
        marginRight:'auto',
        ...FontStyle.display_h4.medium,
        fontSize: normalize(16),
        color: Colors.black[100]
    },
    textEnterV: {
        textAlign:'center',
        ...FontStyle.text_h5.regular,
        fontSize: normalize(10),
        lineHeight: normalize(12),
        color: Colors.grey[1200],
        // marginBottom: normalize(28),
        // marginTop: normalize(7)
    },
    containerItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "space-between",
        marginVertical:normalize(15)
    },
    item: {
        width: normalize(68),
        height: normalize(68),
        borderRadius: BorderStyles.radius.ss,
        backgroundColor: Colors.grey[1000],
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:normalize(7),

    },
    keyboardContainer: {
        marginTop:'auto',
        borderTopWidth: 0.5,
        borderTopColor: Colors.grey[1100],
        flexDirection: "row",
        flexWrap: "wrap",
    },
    numberContainer: {
        // backgroundColor:'red',
        height:normalize(50),
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
        marginTop: normalize(45)
    },
    arrowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: normalize(53)
    },
    arrowStyle: {
        color: Colors.black[100]
    },
    numberTextStyle: {
        fontWeight:500,
        fontSize: normalize(20),
        lineHeight: normalize(24)
    }
})
