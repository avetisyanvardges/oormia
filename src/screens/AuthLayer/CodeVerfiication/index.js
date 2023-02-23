import React, {useEffect, useState, useRef} from "react";
import {View} from "react-native";
import Text from "../../../components/text";
import {styles} from "./style";
import Timer from "../../../components/timer";
import CodeVerificationNumber from "./CodeVerificationNumber";
import ArrowRight from "../../../assets/img/svg/arrow/arrowRight";

function CodeVerification() {

    const [pin, setPin] = useState([]);
   

    const onClick = (text) => {
    const x = pin
        if (pin.length < 4 ) {
           x.push(text)
            setPin([...x])
        }   
    }

    const onDelete = () => {

    const pinLength = pin.length - 1;

        if (!(pinLength < 0)) {
            pin.splice(pinLength, 1)
            setPin([...pin])
        }
    }

useEffect(()=>{
    setPin([])
},[])

    return (
        <View >
            <View style={styles.containerText}>
               <Text text="Code Verification" style={styles.textCodV}/>
               <Text text="Enter verification code here" style={styles.textEnterV}/>
            </View>
            <View style={styles.containerItem}>
               {Array.from({length: 4}).map((el, i) => {
                  return <View style={styles.item} key={i}><Text text={pin[i]} style={styles.numberTextStyle}/></View>
            })}
            </View>
            <Timer timerText="Send me code again" timerStyle={styles.timer}/>
            <View style={styles.keyboardContainer} >
               {Array.from({length: 9}).map((el, i) => {
                     return <CodeVerificationNumber key={i} numberContainerStyle={styles.numberContainer} numberText={i + 1} numberTextStyle={styles.numberTextStyle} onClick={onClick}/>
               })}
            </View>
            <View style={styles.arrowContainer}>
               <CodeVerificationNumber numberContainerStyle={styles.numberContainer} numberText={0} onClick={onClick}
                     numberTextStyle={styles.numberTextStyle}/>
               <CodeVerificationNumber numberContainerStyle={styles.numberContainer} numberText={<ArrowRight/>} onClick={onDelete}
                       numberTextStyle={styles.arrowStyle}/>
            </View>
        </View>
    )
}

export default CodeVerification
