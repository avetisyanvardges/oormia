import React, {useState} from 'react';
import {View} from "react-native";
import {CustomText} from "components/Text";
import {normalize} from "assets/RootStyles/normalize";
import styles from './styles';
import {Colors} from "assets/RootStyles";

function Index({languages}) {
    const [activeLanguage, setActiveLanguage] = useState('AM')
    return (
        <View style={styles.body}>
            {
                languages.map((item, i) => <CustomText
                    globalStyle={[styles.text, {
                        color:activeLanguage===item?Colors.lilac:Colors.black_tint_84
                    }]}
                    key={i}
                    onPress={() => setActiveLanguage(item)}
                    values={item}
                />)
            }
        </View>
    );
}

export default Index;
