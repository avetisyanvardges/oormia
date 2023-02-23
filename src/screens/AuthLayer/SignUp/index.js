import React, {useState} from 'react';
import {ScrollView, View, TouchableOpacity, Pressable} from 'react-native';
import Input from '../../../components/input';
import Text from '../../../components/Text';
import {styles} from './style';
import Button from '../../../components/button';
import Stroke from '../../../assets/img/svg/stroke/stroke';
import {Formik} from 'formik';
import {validationSchema} from '../../../constants/validations';
import HideIcon from '../../../assets/img/svg/show/hide';
import ShowIcon from '../../../assets/img/svg/show/show';
import {routNames} from '../../../constants/routNames';
import ScreenMask from '../../../components/screenMask';

function SignUp({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const showHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const icon = secureTextEntry ? <ShowIcon /> : <HideIcon />;

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
              <Text text="SIgn Up" style={styles.textStyle} />
              <Input
                placeholder="First Name *"
                value={values.firstName}
                onChange={handleChange('firstName')}
                errorText={touched.firstName && errors.firstName}
                onBlur={handleBlur('firstname')}
              />
              <Input
                placeholder="Last Name *"
                value={values.lastName}
                onChange={handleChange('lastName')}
                errorText={touched.lastName && errors.lastName}
                onBlur={handleBlur('lastName')}
              />
              <Input
                placeholder="Number *"
                value={values.number}
                onChange={handleChange('number')}
                errorText={touched.number && errors.number}
                onBlur={handleBlur('number')}
              />
              <Input
                placeholder="Email *"
                value={values.email}
                onChange={handleChange('email')}
                errorText={touched.email && errors.email}
                onBlur={handleBlur('email')}
              />
              <Input
                placeholder="Password *"
                value={values.password}
                onChange={handleChange('password')}
                errorText={touched.password && errors.password}
                onBlur={handleBlur('password')}
                icon={icon}
                secureTextEntry={secureTextEntry}
                iconOnClick={showHide}
              />
              <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => console.log('hay')}>
                  <Text
                    text="I agree with the Terms of Servise & Privacy Policy"
                    style={styles.textButtonText}
                  />
                </TouchableOpacity>
                <Button
                  styleButton={styles.buttonStyle}
                  textButton="Join us"
                  textStyle={styles.buttonTextStyle}
                  onClick={handleSubmit}
                  disabled={!(isValid && dirty)}
                />
                <View style={styles.signInTextContainer}>
                  <TouchableOpacity onPress={() => console.log('hay')}>
                    <Text
                      text="Already haven an account?"
                      style={styles.textButtonText}
                    />
                  </TouchableOpacity>
                  {/*<TouchableOpacity  onPress={navigation.navigate(routNames.LOGIN)}><Text  Text="Sign in"  style={styles.signInText} /></TouchableOpacity>*/}
                </View>
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
                <Text text="CUSTOM NEXT" />
              </Pressable>
            </View>
          </ScrollView>
        )}
      </Formik>
    </ScreenMask>
  );
}

export default SignUp;
