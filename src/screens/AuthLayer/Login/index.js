import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { CustomText } from 'components/Text';
import Input from 'components/Input';
import ScreenMask from '../../../components/screenMask';
import { styles } from 'screens/AuthLayer/Login/styles';
import { routNames } from 'constants/routNames';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Button from 'components/Button';
import { useNavigation } from '@react-navigation/native';
import { navigate } from 'services/NavigationService';
import { Shadow } from 'assets/RootStyles';
import { Controller, useForm } from 'react-hook-form';
import dispatch from 'utils/dispatch/dispatch';
import { userSignIn } from 'state/user/operations/userSignIn';
import { normalize } from 'assets/RootStyles/normalize';

const LoginScreen = ({ setPage, page, SIGN_UP, LOGIN }) => {
  const [switchPage, setSwitchPage] = useState(true);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      email: 'vavetisyan.g@gmail.com',
      password: 'Aa1234567!',
    },
  });
  console.log(page);
  const handlerSubmit = values => {
    if (page === SIGN_UP) {
      navigate(routNames.SIGN_UP_USER_DATA, { values });
    } else {
      dispatch(userSignIn(values));
    }
  };

  return (
    <ScreenMask
      containerStyle={{
        marginTop: '100%',
      }}
      style={{ ...Shadow }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View>
          <CustomText
            children={page === SIGN_UP ? 'Sign Up' : 'Log In'}
            globalStyle={styles.textStyle}
          />
          <CustomText
            children={`${
              page === SIGN_UP ? 'Create' : 'Enter'
            } your email and password'`}
            globalStyle={styles.title}
          />
          <Controller
            name={'email'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                // label={'Email'}
                placeholder="Enter mobile or e-mail"
                value={value}
                onChange={onChange}
                errorText={value && errors.email}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            name={'password'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                // label={'Password'}
                placeholder="Password"
                value={value}
                onChange={onChange}
                errorText={value && errors.password}
                onBlur={onBlur}
                secure={true}
              />
            )}
          />
          {page === SIGN_UP ? (
            <TouchableOpacity
              style={{ marginBottom: normalize(8) }}
              onPress={() => navigation.navigate(routNames.FORGOT)}>
              <CustomText
                children="Forgot password?"
                globalStyle={styles.signInText}
              />
            </TouchableOpacity>
          ) : null}
          <Button
            title={page === SIGN_UP ? 'Create' : 'Login'}
            textStyle={styles.buttonTextStyle}
            onPress={handleSubmit(handlerSubmit)}
            containerStyle={{ marginTop: normalize(16) }}
            // disabled={!(isValid && isDirty)}
          />
        </View>

        <View style={styles.orContainer}>
          <View style={styles.or} />
          <CustomText children="Sign In With" globalStyle={styles.orText} />
          <View style={styles.or} />
        </View>
        <View style={styles.social}>
          <TouchableOpacity style={styles.socialItems}>
            <Icon name={ICON_NAMES.BUTTON_ICON.APPLE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItems}>
            <Icon name={ICON_NAMES.BUTTON_ICON.GOOGLE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItems}>
            <Icon name={ICON_NAMES.BUTTON_ICON.FB} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItems}>
            <Icon name={ICON_NAMES.BUTTON_ICON.LINKEDIN} />
          </TouchableOpacity>
        </View>
        <View style={styles.signInTextContainer}>
          <CustomText
            children="Don’t have an account ?"
            globalStyle={styles.textButtonText}
          />
          <TouchableOpacity
            style={styles.lineBody}
            onPress={() => setPage(page === SIGN_UP ? LOGIN : SIGN_UP)}>
            <CustomText
              children={page === SIGN_UP ? 'Log In' : 'Sign Up'}
              globalStyle={styles.signInText}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenMask>
  );
};

export default LoginScreen;
