import React, {useState} from 'react';
import {ScrollView, View, TouchableOpacity, Pressable} from 'react-native';
import Input from 'components/input';
import { CustomText } from 'components/Text';
import {styles} from './style';
import Button from "components/Button";
import {Formik} from 'formik';
import ScreenMask from '../../../components/screenMask';
import Checkbox from "components/Checkbox";
import {routNames} from "constants/routNames";
import {validationSchema} from "constants/validations";


function SignUp({navigation}) {
    const [checked, setChecked]=useState(false)

  return (
    <ScreenMask>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          number: '',
          email: '',
          password: '',
          confirmPassword: '',
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <CustomText values="SIgn Up" globalStyle={styles.textStyle} />
              <Input
                title='First Name'
                placeholder="First Name *"
                value={values.firstName}
                onChange={handleChange('firstName')}
                errorText={values.firstName && errors.firstName}
                onBlur={handleBlur('firstname')}
              />
              <Input
                title='Last Name'
                placeholder="Last Name *"
                value={values.lastName}
                onChange={handleChange('lastName')}
                errorText={values.lastName && errors.lastName}
                onBlur={handleBlur('lastName')}
              />
              <Input
                title='Number'
                placeholder="Number *"
                value={values.number}
                onChange={handleChange('number')}
                errorText={values.number && errors.number}
                onBlur={handleBlur('number')}
              />
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
              <Input
                    title='Confirm Password'
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    secure
                    onChange={handleChange('confirmPassword')}
                    errorText={values.confirmPassword && errors.confirmPassword}
                    onBlur={handleBlur('confirmPassword')}
                />
                <Checkbox size={16} isChecked={checked} setChecked={setChecked}
                          text='I agree with the Terms of Servise & Privacy Policy'/>
                <Button
                  styleButton={styles.buttonStyle}
                  textButton="Join us"
                  textStyle={styles.buttonTextStyle}
                  onClick={handleSubmit}
                  disabled={!(isValid && dirty)}
                />
                <View style={styles.signInTextContainer}>
                  <TouchableOpacity onPress={() => console.log('hay')}>
                    <CustomText
                      values="Already haven an account?"
                      globalStyle={styles.textButtonText}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={()=>navigation.goBack()}>
                      <CustomText  values="Sign in"  globalStyle={styles.signInText} />
                  </TouchableOpacity>
                </View>
              <Pressable
                onPress={() => navigation.navigate(routNames.CODE_VERIFICATION)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 160,
                  height: 60,
                  backgroundColor: 'red',
                }}>
                <CustomText values="CUSTOM NEXT" />
              </Pressable>
            </View>
          </ScrollView>
        )}
      </Formik>
    </ScreenMask>
  );
}

export default SignUp;
