import React from "react";
import { styles } from "./style";
import { View, Image, TouchableOpacity } from "react-native";
import { ICON_NAMES } from "components/Svgs/icon_names";
import Icon from "components/Svgs";
import { CustomText } from "components/Text";




function Item({item, onChecked}){
  console.log(item.checked)
    return (
        <View
           key={item.id}
           style={styles.imgContainer}
        >
       { item.checked ? 
         <Icon
           name={ICON_NAMES.ASSETS_SVG.CHECKBOX}
           color="white" style={styles.checkbox}
           onPress={()=> onChecked(item)}
         /> :
         <Icon
           style={styles.checkbox}
           onPress={()=> onChecked(item)}
         />
        }
        <CustomText
          values={item.title}
          globalStyle={styles.imgText}
        />
        <CustomText
          values={item.text}
          globalStyle={styles.places}/>
        <Image
          source={{uri:item.img, width: 360, height:200}}/>
        </View>
    )
}


export default Item