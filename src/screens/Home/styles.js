import {StyleSheet} from "react-native";
import {normalize} from "assets/RootStyles/normalize";
import {Colors, FontStyle} from "assets/RootStyles";

export const styles = StyleSheet.create({
    image:{
        resizeMode:'stretch',
        flex:1,
    },
    btnTextLogin: {
        ...FontStyle.text_h4.regular,
        color: Colors.white,
    },
    btnTextSign:{
        ...FontStyle.text_h4.regular,
        color: Colors.black[50],
    },
    body: {
        width: '100%',
        height: '100%',
    },
    imageBlock: {
        position: 'absolute',
        width: '100%',
        height: '50%'
    },
    stepLines: {
        height: normalize(5),
        borderRadius: normalize(5),
    },
    step: {
        marginTop: normalize(10),
        width: '100%',
        position: 'absolute',
        paddingHorizontal: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnBlock: {
        marginBottom: normalize(50),
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnLogin: {
        width: normalize(340),
        marginBottom: normalize(10),
        backgroundColor: Colors.blue[900],
        borderColor: Colors.blue[900],
    },
    btnSign: {
        width: normalize(340),
        backgroundColor: Colors.white
    },
    slideTitle:{
        position:'absolute',
        top:'50%',
        color:Colors.white,
        ...FontStyle.text_h2.bold,
        fontSize:normalize(26)
    }
})
