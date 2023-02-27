import React, {useEffect, useState} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
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

const LoginScreen = ({navigation}) => {
    const [switchPage, setSwitchPage] = useState(true);


    return (
        <ScreenMask
            style={{
                height: '75%',
            }}>
            <View style={styles.container}>
                <Language languages={['AM', 'RU', 'ENG']}/>
                {switchPage ? <Formik
                        validationSchema={yup.object().shape({
                            email: validation.email,
                            password: validation.password
                        })}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={values => console.log(values)}>
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
                                <CustomText values='Log In' globalStyle={styles.textStyle}/>
                                <Input
                                    title={'Email'}
                                    placeholder="Enter mobile or e-mail"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    errorText={values.email && errors.email}
                                    onBlur={handleBlur('email')}
                                />
                                <Input
                                    title={'Password'}
                                    secure
                                    placeholder="Password *"
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    errorText={values.password && errors.password}
                                    onBlur={handleBlur('password')}
                                />
                                <Button
                                    styleButton={styles.buttonStyle}
                                    textButton="Sign in"
                                    textStyle={styles.buttonTextStyle}
                                    onClick={handleSubmit}
                                    disabled={!(isValid && dirty)}
                                />
                                <TouchableOpacity
                                    style={styles.forgot}
                                    onPress={() => navigation.navigate(routNames.FORGOT)}>
                                    <CustomText values="Forgot password" globalStyle={styles.signInText}/>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                    : <SignUp setSwitchPage={setSwitchPage}/>}
                <View style={styles.orContainer}>
                    <View style={styles.or}></View>
                    <CustomText values="or" globalStyle={styles.orText}/>
                    <View style={styles.or}></View>
                </View>
                <Button
                    styleButton={styles.buttonApple}
                    textButton="Login with Apple ID"
                    textStyle={styles.appleGoogleText}
                    // disabled={!(isValid && dirty)}
                    icon={<Icon name={ICON_NAMES.BUTTON_ICON.APPLE}/>}
                />
                <Button
                    styleButton={styles.buttonGoogle}
                    textButton="Login with Google"
                    textStyle={styles.appleGoogleText}
                    // disabled={!(isValid && dirty)}
                    icon={<Icon name={ICON_NAMES.BUTTON_ICON.GOOGLE}/>}
                />
                {/*<View style={styles.fbVkContainer}>*/}
                {/*  <Button*/}
                {/*      textButton="Login"*/}
                {/*      onClick={handleSubmit}*/}
                {/*      disabled={!(isValid && dirty)}*/}
                {/*      icon={<Icon  name={ICON_NAMES.BUTTON_ICON.FB}/>}*/}
                {/*  />*/}
                <View style={styles.signInTextContainer}>
                    <TouchableOpacity
                        onPress={() => console.log('hay')}>
                        <CustomText
                            values="Don’t have an account ?"
                            globalStyle={styles.textButtonText}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSwitchPage(!switchPage)}>
                        <CustomText
                            values={switchPage ? 'Sign Up' : 'Log In'}
                            globalStyle={styles.signInText}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenMask>
    );
};

export default LoginScreen;
