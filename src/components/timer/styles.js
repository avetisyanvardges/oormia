import {StyleSheet} from "react-native";
import {Colors, FontStyle} from "assets/RootStyles";
import {normalize} from "assets/RootStyles/normalize";

export const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    time: {
       marginLeft:normalize(10),
        ...FontStyle.display_h6.bold,
        fontSize:normalize(13),
    },
    timeText: {
        color: Colors.black[200],
        ...FontStyle.display_h6.regular,
        fontSize:normalize(12),
    }
})
