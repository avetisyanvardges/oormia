import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {CustomText} from 'components/Text';
import Input from "components/input";
import ScreenMask from '../../../components/screenMask';
import {Formik} from 'formik';
import {validation} from 'constants/validations';
import {styles} from "screens/AuthLayer/Login/styles";
import {routNames} from 'constants/routNames';
import Language from "components/language";
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import Button from "components/Button";
import * as yup from "yup";
import SignUp from "screens/AuthLayer/SignUp";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = ({setPage, page, SIGN_UP, LOGIN}) => {
    const [switchPage, setSwitchPage] = useState(true);
    const navigation=useNavigation();


    const handlerSubmit=(values)=>{
       if (page===LOGIN){
           navigation.navigate(routNames.SIGN_UP_USER_DATA, values)
       }else if(page===SIGN_UP){
       }
    }

    return (
        <ScreenMask
            containerStyle={{
                marginTop: '100%'
            }}>
            <ScrollView showsVerticalScrollIndicator={false}
                        style={styles.container}>
                {/*<Language languages={['AM', 'RU', 'ENG']}/>*/}
                {switchPage ? <Formik
                        validationSchema={yup.object().shape({
                            email: validation.email,
                            password: validation.password
                        })}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={values =>handlerSubmit(values)}>
                        {({
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              values,
                              errors,
                              touched,
                              isValid,
                              dirty,
                          }) => (
                            <View>
                                <CustomText values={page===LOGIN?'Sign Up':'Log In'} globalStyle={styles.textStyle}/>
                                <CustomText values={`${page===LOGIN?'Create':'Enter'} your email and password'`} globalStyle={styles.title}/>
                                <Input
                                    // title={'Email'}
                                    placeholder="Enter mobile or e-mail"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    errorText={values.email && errors.email}
                                    onBlur={handleBlur('email')}
                                />
                                <Input
                                    // title={'Password'}
                                    secure
                                    placeholder="Password *"
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    errorText={values.password && errors.password}
                                    onBlur={handleBlur('password')}
                                />
                                {page===SIGN_UP?<TouchableOpacity
                                    style={styles.forgot}
                                    onPress={() => navigation.navigate(routNames.FORGOT)}>
                                    <CustomText values="Forgot password?" globalStyle={styles.signInText}/>
                                </TouchableOpacity>:null}
                                <Button
                                    styleButton={styles.buttonStyle}
                                    textButton={page===LOGIN?'Create':"Login"}
                                    textStyle={styles.buttonTextStyle}
                                    onClick={handleSubmit}
                                    disabled={!(isValid && dirty)}
                                />
                            </View>
                        )}
                    </Formik>
                    : <SignUp setSwitchPage={setSwitchPage}/>}
                <View style={styles.orContainer}>
                    <View style={styles.or}></View>
                    <CustomText values="Sign In With" globalStyle={styles.orText}/>
                    <View style={styles.or}></View>
                </View>
                <View style={styles.social}>
                    <TouchableOpacity style={styles.socialItems}>
                        <Icon name={ICON_NAMES.BUTTON_ICON.APPLE}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialItems}>
                        <Icon name={ICON_NAMES.BUTTON_ICON.GOOGLE}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialItems}>
                        <Icon name={ICON_NAMES.BUTTON_ICON.FB}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialItems}>
                        <Icon name={ICON_NAMES.BUTTON_ICON.LINKEDIN}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.signInTextContainer}>
                        <CustomText
                            values="Don’t have an account ?"
                            globalStyle={styles.textButtonText}
                        />
                    <TouchableOpacity
                        style={styles.lineBody}
                        onPress={() => setPage(page===LOGIN?SIGN_UP:LOGIN)}>
                        <CustomText
                            values={page===LOGIN?'Log In':'Sign Up'}
                            globalStyle={styles.signInText}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScreenMask>
    );
};

export default LoginScreen;
