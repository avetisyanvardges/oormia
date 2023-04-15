import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {CustomText} from "components/Text";
import {styles} from "components/Checkbox/styles";
import Svg from "components/Svgs";
import {ICON_NAMES} from "components/Svgs/icon_names";
import {normalize} from "assets/RootStyles/normalize";

function Index({size=20, isChecked=false, setChecked}) {
    return (
        <TouchableOpacity
            onPress={()=>setChecked(!isChecked)}
            style={styles.body}>
            <View style={{
                ...styles.checkboxBody,
                width:normalize(size),
                height:normalize(size),
            }}>
                {isChecked?<Svg width={size/100*80} color={'white'} name={ICON_NAMES.ASSETS_SVG.CHECKBOX}/>:null}
            </View>
        </TouchableOpacity>
    );
}

export default Index;

