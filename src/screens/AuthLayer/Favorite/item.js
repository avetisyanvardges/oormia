import React from "react";
import { styles } from "./style";
import { View, Image, TouchableOpacity } from "react-native";
import { CustomText } from "components/Text";
import CheckBox from '@react-native-community/checkbox';

function Item({item, onChecked}){
    return (
        <View
           key={item.id}
           style={styles.imgContainer}
        >
          <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={item.checked}
            onValueChange={() => onChecked(item)}
          />
          <CustomText
            values={item.title}
            globalStyle={styles.imgText}
         />
          <CustomText
            values={item.text}
            globalStyle={styles.places}
          />
          <Image
            style={{borderRadius:10}}
            source={{uri:item.img, width: 360, height:200}}/>
        </View>
    )
}


export default Item
