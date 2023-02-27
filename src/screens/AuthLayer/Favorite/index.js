import React,{useState} from "react";
import ScreenMask from "components/screenMask";
import { View,FlatList, Image } from "react-native";
import { CustomText } from "components/Text";
import {styles} from "./style"
import { TouchableOpacity } from "react-native-gesture-handler";
import Item from "./item";
import { server } from "assets/server/server";


function Favorite({navigation}){
const [data, setData]=useState(server)

    const onChecked =(item)=>{
        setData(data.map((el)=>{
            if(item.id === el.id){
                return {...el, checked: !el.checked}
            }
            return el
        }))
    }

    return (
        <ScreenMask style={styles.screenMask}>
            <TouchableOpacity style={styles.nextContainer} onPress={()=>navigation.goBack()}>
                <CustomText values="Prev" />
                <CustomText values="Next"/>
            </TouchableOpacity>
            <View style={styles.container}>
                <CustomText
                  values={`Hi Mort! \n Choose your \n favorite categories`}
                />
                <FlatList 
                    data={data}
                    renderItem={({item})=>{
                    return <Item item={item} onChecked={onChecked}/>
                }}/>
            </View>
        </ScreenMask>
    )
}


export default Favorite
