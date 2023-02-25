import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {CustomText} from 'components/Text';
import Input from "components/input";
import ScreenMask from '../../../components/screenMask';
import {Formik} from 'formik';
import {validationSchema} from 'constants/validations';
import {styles} from '../SignUp/style';
import Button from '../../../components/Button';
import {routNames} from 'constants/routNames';
import Language from "components/language";

const LoginScreen = ({navigation}) => {
    return (
        <ScreenMask
            style={{
                height: '70%',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Formik
                    validationSchema={validationSchema}
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
                            <View style={styles.container}>
                                <Language languages={['AM', 'RU', 'ENG']}/>
                                <CustomText values='Log In' globalStyle={styles.textStyle}/>
                                <Input
                                    title={'Email'}
                                    placeholder="Email *"
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
                                <View style={styles.bottomContainer}>
                                    <Button
                                        styleButton={styles.buttonStyle}
                                        textButton="Join us"
                                        textStyle={styles.buttonTextStyle}
                                        onClick={handleSubmit}
                                        disabled={!(isValid && dirty)}
                                    />
                                    <TouchableOpacity
                                        style={styles.forgot}
                                        onPress={() => navigation.navigate(routNames.FORGOT)}>
                                        <CustomText values="Forgot password" globalStyle={styles.signInText}/>
                                    </TouchableOpacity>
                                    <View style={styles.orContainer}>
                                        <View style={styles.or}></View>
                                        <CustomText values="or" globalStyle={styles.orText}/>
                                        <View style={styles.or}></View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate(routNames.REGISTRATION)}>
                                        <CustomText values="Sign Up" globalStyle={styles.signInText}/>
                                    </TouchableOpacity>
                                    <View style={styles.signInTextContainer}>
                                        <TouchableOpacity onPress={() => console.log('hay')}>
                                            <CustomText
                                                values="Already haven an account?"
                                                globalStyle={styles.textButtonText}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </ScreenMask>
    );
};

export default LoginScreen;
