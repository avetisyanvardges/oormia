import React, {useState} from 'react';
import {CustomText} from 'components/Text';
import ScreenMask from 'components/screenMask';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import Input from 'components/Input';
import Button from 'components/Button';
import {normalize} from 'assets/RootStyles/normalize';
import {routNames} from 'constants/routNames';
import Checkbox from 'components/Checkbox';
import {Controller, useForm} from 'react-hook-form';
import {navigate} from 'services/NavigationService';
import ImagePicker from 'react-native-image-crop-picker';

function SignUpUserData({navigation, route}) {
  const [img, setImg] = useState();
  const [git, setGit] = useState(false);
  const [countryActive, setCountryActive] = useState(null);
  const data = route?.params;

  const onSubmit = values => {
    console.log(values);
    // const data = new FormData();
    // data.append('email', values?.email);
    // data.append('password', values?.password);
    // data.append('avatar', img);
    // data.append('firstName', values?.firstName);
    // data.append('lastName', values?.lastName);
    // data.append('phoneNumber', values?.phoneNumber);
    // data.append('guide', values?.guide);
    // data.append('guideForCountry', values?.guideForCountry);
    // data.append('role', values?.role);
    // dispatch(userSignUp(values));
    navigate(routNames.PREFERENCES, {values});
  };

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors, isDirty, isValid},
  } = useForm({
    mode: 'all',
    defaultValues: {
      ...data?.values,
      avatar: '',
      firstName: 'Vardges',
      lastName: 'Avetisyan',
      phoneNumber: '+37477314814',
      guide: false,
      guideForCountry: '',
      role: 'USER',
    },
    // resolver: signUpSchema,
  });
  const onUpload = async () => {
    try {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        multiple: true,
      }).then(image => {
        console.log(image);
        setImg(image);
      });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(errors);

  return (
    <ScreenMask
      isComplete
      style={{
        alignItems: 'center',
        paddingHorizontal: normalize(16),
      }}>
      <View style={styles.titleBlock}>
        <CustomText children="Finish" globalStyle={styles.title} />
        {/*<CustomText*/}
        {/*  children="Skip"*/}
        {/*  globalStyle={styles.titleSkip}*/}
        {/*  onPress={() => navigate(routNames.APP_LAYER)}*/}
        {/*/>*/}
      </View>
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
          render={({field: {value, onChange, onBlur}}) => {
            return (
              <Input
                label={'First name'}
                placeholder="First name"
                value={value}
                {...register('firstName')}
                errorText={value && errors.firstName}
              />
            );
          }}
        />
        <Controller
          name={'lastName'}
          control={control}
          render={({field: {value, onChange, onBlur}}) => {
            return (
              <Input
                label={'Last name'}
                placeholder="Last name"
                value={value}
                {...register('lastName')}
                errorText={value && errors.lastName}
              />
            );
          }}
        />

        <Controller
          name={'phoneNumber'}
          control={control}
          render={({field: {value, onChange, onBlur}}) => (
            <Input
              label={'Phone number'}
              placeholder="Phone number"
              value={value}
              onChange={onChange}
              errorText={value && errors.phoneNumber}
              onBlur={onBlur}
            />
          )}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setGit(!git)}
          style={styles.btn}>
          <CustomText
            globalStyle={styles.btnText}
            children={'Local guide field'}
          />
          <Checkbox isChecked={git} setChecked={setGit} />
        </TouchableOpacity>
        {git ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{...styles.btn, marginTop: normalize(20)}}>
            <CustomText
              globalStyle={styles.btnText}
              children={'Your country'}
            />
            <View style={styles.activeCountryBlock}>
              <CustomText
                globalStyle={{
                  ...styles.btnText,
                  marginRight: normalize(10),
                }}
                children={countryActive ? countryActive.country : ''}
              />
              <CustomText globalStyle={styles.btnCountry} values={'>'} />
            </View>
          </TouchableOpacity>
        ) : null}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            containerStyle={{paddingVertical: normalize(6)}}
            title="Next"
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
