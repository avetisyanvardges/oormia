import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import ScreenMask from "components/screenMask";
import {CustomText} from "components/Text";
import {country} from './listCountry';
import BtnGoBack from "components/BtnGoBack";
import {styles} from './styles'
import Input from "components/input";
import {Colors} from "assets/RootStyles";
import CheckboxCircle from "components/CheckboxCircle";
import {normalize} from "assets/RootStyles/normalize";

function Index({setCountryPageIsOpen, countryActive, setCountryActive}) {
    const [searchValue, setSearchValue]=useState('');


    const handlerSelect=(country)=>{
        setCountryPageIsOpen(false),
        setCountryActive(country)
    };

    const Item = ({item}) =>{
        const regExp=new RegExp(searchValue, 'gi');
        if(regExp.test(item.country)){
            return (
                <TouchableOpacity style={[styles.item, countryActive?countryActive.id===item.id?
                    {
                        backgroundColor:Colors.gray,
                        borderRadius:normalize(10)
                    }:
                    {}: {}]} onPress={()=>handlerSelect(item)}>
                    <CustomText globalStyle={styles.title} values={item.country}/>
                    <CheckboxCircle isChecked={countryActive?countryActive.id===item.id:false}/>
                 </TouchableOpacity>
            )
        }
    }

    return (
        <ScreenMask style={styles.body}>
            <View style={styles.goBackBlock}>
                <BtnGoBack onPress={()=>setCountryPageIsOpen(false)}/>
                <CustomText values='Choose your country' globalStyle={{...styles.title, marginLeft:'auto', marginRight:"auto"}}/>
            </View>
            <Input value={searchValue} onChange={setSearchValue} search placeholder='Search'/>
            <SafeAreaView>
                <FlatList
                    data={country}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ScreenMask>
    );
}

export default Index;
