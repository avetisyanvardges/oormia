import React from 'react';
import {TouchableOpacity, View} from "react-native";
import ScreenMask from "components/screenMask";
import {styles} from "screens/AuthLayer/Reset/styles";
import Icon from "components/Svgs";
import {ICON_NAMES} from "components/Svgs/icon_names";
import {CustomText} from "components/Text";
import {Formik} from "formik";
import * as yup from "yup";
import {validation} from "constants/validations";
import Input from "components/input";
import {routNames} from "constants/routNames";
import Button from "components/Button";
import BtnGoBack from "components/BtnGoBack";

function Index({navigation}) {
    return (
        <ScreenMask style={styles.screenMask}>
            <View style={styles.btnBlock}>
                <BtnGoBack/>
                <CustomText values="Reset" globalStyle={styles.textReset} />
            </View>
            <CustomText globalStyle={styles.text} values='Enter your new password'/>
            <Formik
                validationSchema={yup.object().shape({
                    confirmPassword: validation.confirmPassword,
                    password: validation.password
                })}
                initialValues={{
                    confirmPassword: '',
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
                        <Input
                            secure
                            placeholder="Enter new password"
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            errorText={values.email && errors.confirmPassword}
                            onBlur={handleBlur('confirmPassword')}
                        />
                        <Input
                            secure
                            placeholder="Password *"
                            value={values.password}
                            onChange={handleChange('password')}
                            errorText={values.password && errors.password}
                            onBlur={handleBlur('password')}
                        />
                        <Button
                            styleButton={styles.buttonStyle}
                            textButton={"Reset"}
                            textStyle={styles.buttonTextStyle}
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
