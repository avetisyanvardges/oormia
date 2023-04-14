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
import {routNames} from "constants/routNames";
import BtnGoBack from "components/BtnGoBack";

function Index({navigation}) {

    return (
        <ScreenMask style={styles.screenMask}>
            <View style={styles.btnBack}>
                <BtnGoBack/>
                <CustomText
                    values="Account Recovery"
                    globalStyle={styles.firstText}
                />
            </View>
            <CustomText
                values="A reset link will be sent your email"
                globalStyle={styles.secondText}
            />
            <Formik
                validationSchema={yup.object().shape({
                    email:validation.email
                })}
                initialValues={{
                    email: '',
                }}
                onSubmit={() => navigation.navigate(routNames.CODE_VERIFICATION)}>
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
                            // title={'Email'}
                            placeholder="Enter mobile or e-mail"
                            value={values.email}
                            onChange={handleChange('email')}
                            errorText={values.email && errors.email}
                            onBlur={handleBlur('email')}
                        />
                            <View style={styles.line}></View>
                            <Button
                                textButton='Send'
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


