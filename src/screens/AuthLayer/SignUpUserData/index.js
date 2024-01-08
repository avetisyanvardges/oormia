import React, { useState } from 'react';
import { CustomText } from 'components/Text';
import ScreenMask from 'components/screenMask';
import { View } from 'react-native';
import { styles } from './style';
import Input from 'components/Input';
import Button from 'components/Button';
import { normalize } from 'assets/RootStyles/normalize';
import { routNames } from 'constants/routNames';
import { Controller, useForm } from 'react-hook-form';
import { navigate } from 'services/NavigationService';

function SignUpUserData({ navigation, route }) {
  const [img, setImg] = useState();
  const [git, setGit] = useState(false);
  const [countryActive, setCountryActive] = useState(null);
  const data = route?.params;

  const onSubmit = values => {
    navigate(routNames.PREFERENCES, { values });
  };

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      ...data?.values,
      avatar: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      guide: false,
      guideForCountry: '',
      role: 'USER',
    },
    // resolver: signUpSchema,
  });

  return (
    <ScreenMask
      isComplete
      style={{
        alignItems: 'center',
        paddingHorizontal: normalize(16),
      }}>
      <View style={styles.titleBlock}>
        <CustomText
          children={'user_information.title'}
          globalStyle={styles.title}
        />

        {/*<CustomText*/}
        {/*  children="Skip"*/}
        {/*  globalStyle={styles.titleSkip}*/}
        {/*  onPress={() => navigate(routNames.APP_LAYER)}*/}
        {/*/>*/}
      </View>
      <CustomText
        children={'user_information.description'}
        globalStyle={styles.description}
      />
      {/*<TouchableOpacity onPress={onUpload} style={styles.imgContainer}>*/}
      {/*  {img ? (*/}
      {/*    <Image*/}
      {/*      style={styles.img}*/}
      {/*      source={{*/}
      {/*        uri: img.path,*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  ) : (*/}
      {/*    <Icon name={ICON_NAMES.ASSETS_SVG.CROP_PHOTO} />*/}
      {/*  )}*/}
      {/*  <CustomText globalStyle={styles.upload} children="Upload photo" />*/}
      {/*</TouchableOpacity>*/}

      <View style={styles.body}>
        <Controller
          name={'firstName'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <Input
                label={'first_name'}
                placeholder={'first_name'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                errorText={value && errors.firstName}
              />
            );
          }}
        />
        <Controller
          name={'lastName'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <Input
                label={'last_name'}
                placeholder={'last_name'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                errorText={value && errors.lastName}
              />
            );
          }}
        />

        <Controller
          name={'phoneNumber'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              label={'phone_number'}
              placeholder={'phone_number'}
              value={value}
              onChange={onChange}
              errorText={value && errors.phoneNumber}
              onBlur={onBlur}
            />
          )}
        />

        {/*<TouchableOpacity*/}
        {/*  activeOpacity={0.8}*/}
        {/*  onPress={() => setGit(!git)}*/}
        {/*  style={styles.btn}>*/}
        {/*  <CustomText*/}
        {/*    globalStyle={styles.btnText}*/}
        {/*    children={'Local guide field'}*/}
        {/*  />*/}
        {/*  <Checkbox isChecked={git} setChecked={setGit} />*/}
        {/*</TouchableOpacity>*/}
        {/*{git ? (*/}
        {/*  <TouchableOpacity*/}
        {/*    onPress={() => {}}*/}
        {/*    style={{ ...styles.btn, marginTop: normalize(20) }}>*/}
        {/*    <CustomText*/}
        {/*      globalStyle={styles.btnText}*/}
        {/*      children={'Your country'}*/}
        {/*    />*/}
        {/*    <View style={styles.activeCountryBlock}>*/}
        {/*      <CustomText*/}
        {/*        globalStyle={{*/}
        {/*          ...styles.btnText,*/}
        {/*          marginRight: normalize(10),*/}
        {/*        }}*/}
        {/*        children={countryActive ? countryActive.country : ''}*/}
        {/*      />*/}
        {/*      <CustomText globalStyle={styles.btnCountry} values={'>'} />*/}
        {/*    </View>*/}
        {/*  </TouchableOpacity>*/}
        {/*) : null}*/}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button
            title={'next'}
            textStyle={styles.buttonTextStyle}
            onPress={handleSubmit(onSubmit)}
            // disabled={!(isValid && dirty && img)}
          />
        </View>
      </View>
    </ScreenMask>
  );
}

export default SignUpUserData;
