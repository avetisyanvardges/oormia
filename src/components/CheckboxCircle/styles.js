import {StyleSheet} from "react-native";
import {Colors} from "assets/RootStyles";
import {normalize} from "assets/RootStyles/normalize";

export const styles = StyleSheet.create({
    body: {
        marginVertical:normalize(10),
        width:normalize(20),
        height:normalize(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding:normalize(2),
        borderWidth:3,
        borderColor:'black',
        borderRadius:50,
    },
    check:{
        borderRadius:50,
        width:'100%',
        height:'100%',
        backgroundColor:Colors.blue[900],
    },
})
