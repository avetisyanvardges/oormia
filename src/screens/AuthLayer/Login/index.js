import React,{useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Text from "../../../components/text";
import Input from "../../../components/input";
import ScreenMask from "../../../components/screenMask";
import {Formik} from "formik";
import {validationSchema} from "../../../constants/validations";
import Button from "../../../components/button";
import {routNames} from '../../../constants/routNames';
import ShowIcon from '../../../assets/img/svg/show/show';
import HideIcon from '../../../assets/img/svg/show/hide';
import { styles } from './styles';
import AppleIcon from '../../../assets/img/svg/apple/apple';
import GoogleIcon from '../../../assets/img/svg/google/google';
import VkIcon from '../../../assets/img/svg/buttonSvg/VkIcon';
import FbIcon from '../../../assets/img/svg/buttonSvg/FbIcon';
import InstIcon from '../../../assets/img/svg/buttonSvg/InstIcon';



const LoginScreen = ({navigation}) => {
    
    const [secureTextEntry, setSecureTextEntry] = useState(false);

    const showHide = () => {
        setSecureTextEntry(!secureTextEntry)
    }

    const icon = secureTextEntry ? <ShowIcon/> : <HideIcon/>

    return (
        <ScreenMask style={{
            height: '70%'
        }}>
           <ScrollView>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    email: '',
                    password: "",
                }}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, dirty}) => (
                    <View style={styles.container}>
                        <Text text="Log in" style={styles.textStyle}/>
                        <Input placeholder="Enter mobile or e-mail" value={values.email} onChange={handleChange("email")}
                                   errorText={touched.email && errors.email} onBlur={handleBlur("email")}  inputContainerStyle={styles.inputContainer}/>
                       <Input placeholder="Password *" value={values.password} onChange={handleChange("password")}
                                   errorText={touched.password && errors.password} onBlur={handleBlur("password")}
                                   icon={icon}
                                   secureTextEntry={secureTextEntry} iconOnClick={showHide}/>
                            <View style={styles.bottomContainer}></View>
                        <Button styleButton={styles.buttonStyle} textButton="Sign in"
                                        textStyle={styles.buttonTextStyle} onClick={handleSubmit}
                                        disabled={!(isValid && dirty)}/>
                       <TouchableOpacity  onPress={()=>navigation.navigate(routNames.FORGOT)} style={{alignSelf:"flex-start"}}>
                                    <Text  text="Forgot password"  style={styles.forgotText} />
                                </TouchableOpacity>
                        <View style={styles.orContainer}>
                            <View style={styles.or}></View>
                            <Text text="or" style={styles.orText}/>
                            <View style={styles.or}></View>
                        </View>
                        <Button styleButton={styles.buttonApple} textButton="Login with Apple ID"
                                    textStyle={styles.appleText} onClick={()=> console.log("test")} icon={<AppleIcon/>}
                                        />
                        <Button styleButton={styles.buttonGoogle} textButton="Login with Google"
                                    textStyle={styles.googleText} onClick={()=> console.log("test")} icon={<GoogleIcon/>}
                                        />
                        <View style={styles.fbVkContainer}>
                            <Button textButton='Login' icon={<FbIcon/>}/>
                            <Button textButton='Login' icon={<VkIcon/>} styleButton={{marginHorizontal:13}}/>
                            <Button textButton='Login' icon={<InstIcon/>}/>
                        </View>
                        <View style={styles.signInTextContainer}>
                            <TouchableOpacity onPress={() => console.log("hay")}><Text
                                        text="Don`t have an account"
                                        style={styles.dontHave}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>navigation.navigate(routNames.REGISTRATION)}>
                                    <Text  text="Sign Up"  style={styles.signInText} />
                            </TouchableOpacity> 
                        </View>
                    </View>
                )}
            </Formik>
           </ScrollView>

        </ScreenMask>
    );
};

export default LoginScreen;
