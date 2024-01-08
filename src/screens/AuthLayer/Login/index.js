import React, { Fragment, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { CustomText } from 'components/Text';
import Input from 'components/Input';
import ScreenMask from '../../../components/screenMask';
import { styles } from 'screens/AuthLayer/Login/styles';
import { routNames } from 'constants/routNames';
import Button from 'components/Button';
import { useNavigation } from '@react-navigation/native';
import { navigate, replace } from 'services/NavigationService';
import { Shadow } from 'assets/RootStyles';
import { Controller, useForm } from 'react-hook-form';
import dispatch from 'utils/dispatch/dispatch';
import { userSignIn } from 'state/user/operations/userSignIn';
import { normalize } from 'assets/RootStyles/normalize';
import { deviceInfo } from 'assets/deviceInfo';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';
import signUpSchema from 'utils/validations/signup';

const LoginScreen = ({ setPage, page, SIGN_UP, LOGIN, FORGOT }) => {
  const [switchPage, setSwitchPage] = useState(true);
  const navigation = useNavigation();
  const { token } = useSelector(({ user }) => user);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: page === SIGN_UP ? yupResolver(signUpSchema) : null,
  });

  useEffect(() => {
    if (!isEmpty(token)) {
      replace(routNames.APP_LAYER);
    }
  }, [token]);
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
        marginTop: deviceInfo?.small_screen ? '60%' : '100%',
      }}
      style={{ ...Shadow }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{ flex: 1 }}>
          <CustomText
            children={page === SIGN_UP ? 'sign_up.title' : 'login.title'}
            globalStyle={styles.textStyle}
          />
          <CustomText children={'login.subtitle'} globalStyle={styles.title} />
          <Controller
            name={'email'}
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <Input
                // label={'Email'}
                placeholder={'email'}
                value={value}
                onChange={onChange}
                errorText={error?.message}
                validated={error?.message}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            name={'password'}
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => {
              console.log(error, 'messs');
              return (
                <Input
                  // label={'Password'}
                  placeholder={'password'}
                  value={value}
                  onChange={onChange}
                  errorText={error?.message}
                  validated={error?.message}
                  onBlur={onBlur}
                  secure={true}
                  showValidation={page === SIGN_UP}
                />
              );
            }}
          />
          {page !== SIGN_UP ? (
            <TouchableOpacity onPress={() => navigate(routNames.FORGOT)}>
              <CustomText
                children={'forgot_password'}
                globalStyle={styles.signInText}
              />
            </TouchableOpacity>
          ) : null}

          <View style={{ flex: 1 }}>
            <Button
              title={
                page === FORGOT
                  ? 'Reset'
                  : page === SIGN_UP
                  ? 'sign_up'
                  : 'login'
              }
              textStyle={styles.buttonTextStyle}
              onPress={handleSubmit(handlerSubmit)}
              containerStyle={{ marginTop: normalize(16) }}
              disabled={page === SIGN_UP ? !isValid || !isDirty : false}
            />
          </View>
        </View>
        <Fragment>
          {/*<View style={styles.orContainer}>*/}
          {/*  <View style={styles.or} />*/}
          {/*  <CustomText*/}
          {/*    children={`Sign ${page === SIGN_UP ? 'Up' : 'In'} With`}*/}
          {/*    globalStyle={styles.orText}*/}
          {/*  />*/}
          {/*  <View style={styles.or} />*/}
          {/*</View>*/}
          {/*<View style={styles.social}>*/}
          {/*  {deviceInfo?.ios ? (*/}
          {/*    <TouchableOpacity style={styles.socialItems}>*/}
          {/*      <Icon name={ICON_NAMES.BUTTON_ICON.APPLE} />*/}
          {/*    </TouchableOpacity>*/}
          {/*  ) : null}*/}
          {/*  <TouchableOpacity style={styles.socialItems}>*/}
          {/*    <Icon name={ICON_NAMES.BUTTON_ICON.GOOGLE} />*/}
          {/*  </TouchableOpacity>*/}
          {/*  <TouchableOpacity style={styles.socialItems}>*/}
          {/*    <Icon name={ICON_NAMES.BUTTON_ICON.FB} />*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
          <View style={styles.signInTextContainer}>
            <CustomText
              children={
                page === SIGN_UP
                  ? 'already_have_an_account'
                  : 'dont_have_an_account'
              }
              globalStyle={styles.textButtonText}
            />
            <TouchableOpacity
              style={styles.lineBody}
              onPress={() => setPage(page === SIGN_UP ? LOGIN : SIGN_UP)}>
              <CustomText
                children={page === SIGN_UP ? 'btn.login' : 'btn.sign_up'}
                globalStyle={styles.signInText}
              />
            </TouchableOpacity>
          </View>
        </Fragment>
      </ScrollView>
    </ScreenMask>
  );
};

export default LoginScreen;
