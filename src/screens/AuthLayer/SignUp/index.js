import React, {useEffect} from 'react';
import {BackHandler, View, TouchableOpacity} from 'react-native';
import Input from 'components/input';
import { CustomText } from 'components/Text';
import {styles} from './style';
import Button from "components/Button";
import {Formik} from 'formik';
import {routNames} from 'constants/routNames';
import {validation} from "constants/validations";
import * as yup from "yup";
import {useNavigation} from "@react-navigation/native";
import ScreenMask from "components/screenMask";


function SignUp({setSwitchPage}) {
    const navigation=useNavigation();

    const handleBackButtonClick=()=>{
        setSwitchPage(true);
        return true
    }

    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick)
        return ()=> BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    },[])

    return (
        <ScreenMask
            containerStyle={{
                marginTop:'100%'
            }}>
      <Formik
          validationSchema={yup.object().shape({
              email:validation.email,
              password:validation.password
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
              <CustomText values="Create an account" globalStyle={styles.textStyle} />
              <Input
                title='Email'
                placeholder="Email *"
                value={values.email}
                onChange={handleChange('email')}
                errorText={values.email && errors.email}
                onBlur={handleBlur('email')}
              />
              <Input
                title='Password'
                placeholder="Password *"
                value={values.password}
                secure
                onChange={handleChange('password')}
                errorText={values.password && errors.password}
                onBlur={handleBlur('password')}
              />
                <Button
                  styleButton={styles.buttonStyle}
                  textButton="Join us"
                  textStyle={styles.buttonTextStyle}
                  onClick={()=>{
                      handleSubmit();
                      navigation.navigate(routNames.CODE_VERIFICATION)
                  }}
                  disabled={!(isValid && dirty)}
                />
                <View style={styles.signInTextContainer}>
                  <TouchableOpacity onPress={() => console.log('hay')}>
                    <CustomText
                      values='By click the "Create" button you accept the terms of the Privacy Policy'
                      globalStyle={styles.textButtonText}
                    />
                  </TouchableOpacity>
                </View>
            </View>
        )}
      </Formik>
        </ScreenMask>
  );
}

export default SignUp;
