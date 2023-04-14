import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Icon from "components/Svgs";
import {ICON_NAMES} from "components/Svgs/icon_names";
import {useNavigation} from "@react-navigation/native";

function Index({onPress}) {
    const navigation=useNavigation();
    return (
        <TouchableOpacity>
            <Icon name={ICON_NAMES.ASSETS_SVG.ARROW_LEFT} onPress={()=>onPress?onPress():navigation.goBack()}/>
        </TouchableOpacity>
    );
}

export default Index;
