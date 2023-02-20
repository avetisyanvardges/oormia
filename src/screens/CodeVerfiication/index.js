import React, { useEffect, useState,useRef } from "react";
import { View,KeyboardAvoidingView, Button,Text } from "react-native";
import Index from "../../components/text";
import { deviceInfo } from "../../assets/deviceInfo";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./CodeVerificationStyle";
import Timer from "../../components/timer";









function CodeVerification(){


    return (
        <View style={styles.container}>
               <View style={styles.containerText}>
                   <Index text="Code Verification" style={styles.textCodV}/>
                   <Index text="Enter verification code here"  style={styles.textEnterV}/> 
                </View>
              <View style={styles.containerItem}>
              { Array.from({length:4}).map((el)=>{
                return  <View style={styles.item} key={Math.random()}><Text>1</Text></View>
              })}
              </View>
              <Timer timerText="Send me code again" timerStyle={styles.timer}/>
              
            </View>
    )
}


export default CodeVerification