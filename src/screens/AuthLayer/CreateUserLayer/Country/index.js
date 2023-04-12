import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import ScreenMask from "components/screenMask";
import {CustomText} from "components/Text";
import {country} from './listCountry';

function Index({setCountryPageIsOpen, setCountry}) {
    const handlerSelect=(country)=>{
        setCountryPageIsOpen(false),
            setCountry(country)
    }
    return (
        <ScreenMask style={{
            backgroundColor:'red',
        }}>
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
