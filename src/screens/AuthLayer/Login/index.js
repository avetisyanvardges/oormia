import React,{useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {CustomText} from 'components/Text';
import Input from '../../../components/input';
import ScreenMask from '../../../components/screenMask';
import {Formik} from 'formik';
import {validationSchema} from 'constants/validations';
import {styles} from '../SignUp/style';
import Button from '../../../components/button';
import {routNames} from 'constants/routNames';

const LoginScreen = ({navigation}) => {
  return (
    <ScreenMask
      style={{
        height: '70%',
      }}>
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
              <CustomText values='Log In'  globalStyle={styles.textStyle} />
              <Input
                placeholder="Email *"
                value={values.email}
                onChange={handleChange('email')}
                errorText={touched.email && errors.email}
                onBlur={handleBlur('email')}
              />
              <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => console.log('hay')}>
                  <CustomText
                    values="I agree with the Terms of Servise & Privacy Policy"
                    globalStyle={styles.textButtonText}
                  />
                </TouchableOpacity>
                <Button
                  styleButton={styles.buttonStyle}
                  textButton="Join us"
                  textStyle={styles.buttonTextStyle}
                  onClick={handleSubmit}
                  disabled={!(isValid && dirty)}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate(routNames.FORGOT)}>
                  <CustomText values="Forgot password" globalStyle={styles.signInText} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(routNames.REGISTRATION)}>
                  <CustomText values="Sign Up" globalStyle={styles.signInText} />
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
    </ScreenMask>
  );
};

export default LoginScreen;
