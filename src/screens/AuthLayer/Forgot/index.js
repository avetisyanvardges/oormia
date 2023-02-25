import React from 'react';
import ScreenMask from '../../../components/screenMask';
import {CustomText } from "components/Text";
import Input from 'components/input';
import { View, Keyboard } from 'react-native';
import Button from 'components/button';
import {styles} from "./style";
import { Formik } from 'formik';
import { validationSchema } from 'constants/validations';
import { Pressable } from 'react-native';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';

function Index({navigation}) {

    return (
        <ScreenMask style={styles.screenMask}>
            
            <Icon name={ICON_NAMES.ASSETS_ICON.ARROW_LEFT} onPress={()=>navigation.goBack()}/>
            <CustomText
                 values="Forgot your password"
                globalStyle={styles.firstText}
            />
            <CustomText
                values="We will send the code to reset the password to your mail"
                globalStyle={styles.secondText}
            />
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    email: '',
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
                        {/*<Pressable*/}
                        {/*    onPress={Keyboard.dismiss}*/}
                        {/*    style={{width: "100%", height: "100%"}}*/}
                        {/*>*/}
                            
                            <Input
                                placeholder='E-mail'
                                value={values.email}
                                onChange={handleChange('email')}
                                errorText={touched.email && errors.email}
                                onBlur={handleBlur('email')}
                            />
                            <View style={styles.line}></View>
                            <Button
                                textButton='Reset'
                                styleButton={styles.button}
                                textStyle={styles.buttonText}
                                onClick={handleSubmit}
                                disabled={!(isValid && dirty)}
                            />
                        {/*</Pressable>*/}
                    </View>
                )}
            </Formik>
        </ScreenMask>
    );
}

export default Index;


