import React from "react";
import { View } from "react-native";
import Input from "../../components/input";
import Text from "../../components/text";
import { styles } from "./signUpStyle";
import Button from "../../components/button";
import TextButton from "../../components/textButton";
import Stroke from "../../assets/img/svg/stroke/stroke";






function SignUp(){



    return(
        <View style={styles.container}>
            <Text text="SIgn Up"   style={styles.textStyle}/>
            <Input  placeholder="First Name *" inputStyle={styles.inputStyle}/>
            <Input  placeholder="Last Name *" inputStyle={styles.inputStyle}/>
            <Input  placeholder="Number *" inputStyle={styles.inputStyle}/>
            <Input  placeholder="Email *" inputStyle={styles.inputStyle}/>
            <Input  placeholder="Password *" inputStyle={styles.inputStyle}/>
            <Input  placeholder="Confirm Password*" inputStyle={styles.inputStyle}/>
            <View style={styles.bottomContainer}>
                <TextButton icon={<Stroke/>} text="I agree with the Terms of Servise & Privacy Policy"  textStyle={styles.textButtonText} onClick={()=>console.log("hay")}/>
                <Button  styleButton={styles.buttonStyle} textButton="Join us" textStyle={styles.buttonTextStyle}/>
                <View style={styles.signInTextContainer}>
                <TextButton text="Already haven an account?"  textStyle={styles.textButtonText} onClick={()=>console.log("hay")}/>
                <TextButton text="Sign in"  textStyle={styles.signInText} buttonStyle={styles.signInButton} onClick={()=>console.log("hay")}/>
                </View>
            </View>
        </View>
    )
}


export default SignUp