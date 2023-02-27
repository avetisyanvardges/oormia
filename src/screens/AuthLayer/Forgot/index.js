import React from 'react';
import ScreenMask from '../../../components/screenMask';
import {CustomText } from "components/Text";
import Input from 'components/input';
import { View} from 'react-native';
import Button from 'components/Button';
import {styles} from "./style";
import { Formik } from 'formik';
import {validation} from 'constants/validations';
import { Pressable } from 'react-native';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import * as yup from "yup";

function Index({navigation}) {

    return (
        <ScreenMask style={styles.screenMask}>
            <Icon name={ICON_NAMES.ASSETS_SVG.ARROW_LEFT} onPress={()=>navigation.goBack()}/>
            <CustomText
                 values="Forgot your password"
                globalStyle={styles.firstText}
            />
            <CustomText
                values="We will send the code to reset the password to your mail"
                globalStyle={styles.secondText}
            />
            <Formik
                validationSchema={yup.object().shape({
                    email:validation.email
                })}
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
                        <Input
                            title={'Email'}
                            placeholder="Enter mobile or e-mail"
                            value={values.email}
                            onChange={handleChange('email')}
                            errorText={values.email && errors.email}
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
                    </View>
                )}
            </Formik>
        </ScreenMask>
    );
}

export default Index;


