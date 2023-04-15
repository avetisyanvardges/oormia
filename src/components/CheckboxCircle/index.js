import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {CustomText} from "components/Text";
import {styles} from "./styles";
import Svg from "components/Svgs";
import {ICON_NAMES} from "components/Svgs/icon_names";
import {normalize} from "assets/RootStyles/normalize";
import {Colors} from "assets/RootStyles";

function Index({ isChecked=false, }) {
    return (
        <View style={{...styles.body, borderColor:isChecked?Colors.blue[900]:Colors.gray}}>
            {isChecked?<View style={styles.check}/>:null}
        </View>
    );
}

export default Index;
