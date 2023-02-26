import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {CustomText} from "components/Text";
import {styles} from "components/Checkbox/styles";
import Svg from "components/Svgs";
import {ICON_NAMES} from "components/Svgs/icon_names";
import {normalize} from "assets/RootStyles/normalize";

function Index({text, size=12,textStyle, isChecked=true, setChecked}) {
    return (
        <TouchableOpacity
            onPress={()=>setChecked(!isChecked)}
            style={styles.body}>
            <View style={{
                ...styles.checkboxBody,
                width:normalize(size),
                height:normalize(size)
            }}>
                {isChecked?<Svg width={size}  name={ICON_NAMES.ASSETS_SVG.CHECKBOX}/>:null}
            </View>
            <CustomText values={text} globalStyle={{
                ...styles.text,
                ...textStyle,
            }
            }/>
        </TouchableOpacity>
    );
}

export default Index;
