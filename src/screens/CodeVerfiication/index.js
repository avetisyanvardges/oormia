import React, { useEffect, useState,useRef } from "react";
import { View } from "react-native";
import Text from "../../components/text";
import { styles } from "./CodeVerificationStyle";
import Timer from "../../components/timer";
import CodeVerfiicationNumber from "./CodeVerificationNumber";
import ArrowRight from "../../assets/img/svg/arrow/arrowRight";









function CodeVerification(){

const [pin, setPin]= useState([]);
const [index, setIndex]= useState(0);



const onClick =(text)=>{

    if(pin.length <= 4 && !pin[index]){
        pin.splice(index,1,text) 
        setPin([...pin])
        }



    if(index === 3){
        return
    }else {
        setIndex(index + 1)
    }
}

const onDelet = ()=>{
let pinLength= pin.length -1;

   if(!(pinLength < 0)){
    pin.splice(pinLength,1) 
        setPin([...pin])
    // setPin(pin.filter((el,i)=>{
    //     if(i !== x){
    //         return el
    //     }
    //    }))
   }
    
    if(index <= 0 ){
        return
    }else{
        setIndex(index -1)
    }
    
}



useEffect(()=>{
    
    setIndex(0);

},[])



    return (
        <View style={styles.container}>
               <View style={styles.containerText}>
                   <Text text="Code Verification" style={styles.textCodV}/>
                   <Text text="Enter verification code here"  style={styles.textEnterV}/> 
                </View>
              <View style={styles.containerItem}>
              { Array.from({length:4}).map((el,i)=>{
                return  <View style={styles.item} key={i} ><Text  text={pin[i]} style={styles.numberTextStyle}/></View>
              })}
              </View>
              <Timer timerText="Send me code again" timerStyle={styles.timer}/>
              <View style={styles.keybordContainer}>
              { Array.from({length:9}).map((el,i)=>{
                return    <CodeVerfiicationNumber key={i}  numberContainerStyle={styles.numberContainer} numberText={i + 1 } numberTextStyle={styles.numberTextStyle} onClick={onClick}/>
              })}
              </View>
              <View style={styles.arrowContainer}>
                 <CodeVerfiicationNumber  numberContainerStyle={styles.numberContainer} numberText={0 } onClick={onClick} numberTextStyle={styles.numberTextStyle}/>
                <CodeVerfiicationNumber numberContainerStyle={styles.numberContainer} numberText={<ArrowRight/>} onClick={onDelet} numberTextStyle={styles.arrowStyle}/>
              </View>
            </View>
    )
}


export default CodeVerification


// function CodeVerification(){

//     const [pin, setPin]= useState([])
    
//     const onClick =(text)=>{
//         if(pin.length <= 3){
//             setPin([...pin, text])
//         }
//     }
//     console.log(pin)
//         return (
//             <View style={styles.container}>
//                    <View style={styles.containerText}>
//                        <Text text="Code Verification" style={styles.textCodV}/>
//                        <Text text="Enter verification code here"  style={styles.textEnterV}/> 
//                     </View>
//                   <View style={styles.containerItem}>
//                   { Array.from({length:4}).map((el,i)=>{
//                     return  <View style={styles.item} key={Math.random()} ><Text  text={pin[i]}/></View>
//                   })}
//                   </View>
//                   <Timer timerText="Send me code again" timerStyle={styles.timer}/>
//                   <View style={styles.keybordContainer}>
//                   { Array.from({length:9}).map((el,i)=>{
//                     return    <CodeVerfiicationNumber  numberContainerStyle={styles.numberContainer} numberText={i + 1 } onClick={onClick}/>
//                   })}
//                   </View>
//                   <CodeVerfiicationNumber  numberContainerStyle={styles.numberContainer} numberText={0 } onClick={onClick}/>
//                 </View>
//         )
//     }
    
    
//     export default CodeVerification