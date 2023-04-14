import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import ScreenMask from "components/screenMask";
import {CustomText} from "components/Text";
import {country} from './listCountry';
import BtnGoBack from "components/BtnGoBack";
import {styles} from './styles'
import Input from "components/input";

function Index({setCountryPageIsOpen, setCountry}) {

    const handlerSelect=(country)=>{

        setCountryPageIsOpen(false),
        setCountry(country)
    }
    return (
        <ScreenMask style={styles.body}>
            <View style={styles.goBackBlock}>
                <BtnGoBack onPress={()=>setCountryPageIsOpen(false)}/>
                <CustomText values='Choose your country' globalStyle={styles.title}/>
            </View>
            <Input search placeholder='Search'/>
            {country.map((item,i)=>
                <TouchableOpacity onPress={()=>handlerSelect(item.country)} key={i}>
                    {/*<Text>sdf</Text>*/}
                    <CustomText values={item.country}/>
                </TouchableOpacity>
                )}
            {/*<CustomText values={'Choose your country'}/>*/}

        </ScreenMask>
    );
}

export default Index;
