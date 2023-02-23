import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Text from "../../../components/text";
import {Colors} from '../../../assets/RootStyles';
import {deviceInfo} from '../../../assets/deviceInfo';
import Input from "../../../components/input";
import ScreenMask from "../../../components/screenMask";
import {Formik} from "formik";
import {validationSchema} from "../../../constants/validations";
import {styles} from "../SignUp/style";
import Button from "../../../components/button";
import {routNames} from '../../../constants/routNames'


const LoginScreen = ({navigation}) => {
    return (
        <ScreenMask style={{
            height: '70%'
        }}>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    email: '',
                    password: "",
                }}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched, isValid,dirty}) => (
                    <View
                    >
                        <View style={styles.container}>
                            <Text text="Log In" style={styles.textStyle}/>
                            <Input placeholder="Email *" value={values.email} onChange={handleChange("email")}
                                   errorText={touched.email && errors.email} onBlur={handleBlur("email")}/>
                            <View style={styles.bottomContainer}>
                                <TouchableOpacity  onPress={()=>console.log("hay")}><Text  text="I agree with the Terms of Servise & Privacy Policy"
                                                                                           style={styles.textButtonText} /></TouchableOpacity>
                                <Button  styleButton={styles.buttonStyle} textButton="Join us" textStyle={styles.buttonTextStyle} onClick={handleSubmit} disabled={!(isValid && dirty)}/>
                                <TouchableOpacity  onPress={()=>navigation.navigate(routNames.FORGOT)}>
                                    <Text  text="Forgot password"  style={styles.signInText} />
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=>navigation.navigate(routNames.REGISTRATION)}>
                                    <Text  text="Sign Up"  style={styles.signInText} />
                                </TouchableOpacity>
                                <View style={styles.signInTextContainer}>
                                    <TouchableOpacity onPress={()=>console.log("hay")}><Text text="Already haven an account?" style={styles.textButtonText}/></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>

        </ScreenMask>
    );
};

export default LoginScreen;
