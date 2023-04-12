import {StyleSheet} from "react-native";
import {Colors} from "assets/RootStyles";
import {normalize} from "assets/RootStyles/normalize";

export const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:normalize(5)
    },
    checkboxBody: {
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor: Colors.blue[900],
        borderRadius: normalize(4),
        backgroundColor: Colors.blue[900]
    },
    text: {
        marginLeft: normalize(5),
    }
})
