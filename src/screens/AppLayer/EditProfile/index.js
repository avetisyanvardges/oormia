import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { back } from 'services/NavigationService';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import Input from 'components/Input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImagePicker from 'screens/AppLayer/Create/components/ImagePicker';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import dispatch from 'utils/dispatch/dispatch';
import { editProfile } from 'state/user/operations/editProfile';
import { isEmpty } from 'lodash';
import MImage from 'components/MImage';

const EditProfile = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { currentUser } = useSelector(({ user }) => user);
  const bottomSheetRef = useRef(null);
  const [response, setResponse] = useState(null);
  const mutatedImage = currentUser?.pictures?.[
    currentUser?.pictures.length - 1
  ]?.fileDownloadUri?.replace(':8085', ':8086');

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
      data: {
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        phoneNumber: currentUser?.phoneNumber,
        preferences: currentUser?.preferences,
        guide: false,
        guideForCountry: '',
        role: currentUser?.role,
        name: 'poxos',
        surname: currentUser?.lastName,
      },
      pictures: [],
    },
  });

  useEffect(() => {
    const [photo] = response?.assets || [];
    if (photo?.uri) {
      bottomSheetRef.current.close();
      setValue('image', photo?.uri);
      setValue('pictures', {
        name: photo?.fileName,
        uri: photo?.uri,
        type: photo?.type,
      });
    }
  }, [response]);

  const onSubmit = ({ data, pictures }) => {
    const body = new FormData();

    body.append('request', {
      string: JSON.stringify(data),
      type: 'application/json',
    });

    if (!isEmpty(pictures)) {
      if (!isEmpty(pictures[0])) {
        body.append('file', {
          name: pictures?.[0]?.fileName,
          uri: pictures?.[0]?.fileDownloadUri,
          type: 'image/jpeg',
        });
      } else {
        let mutatedName;

        if (!pictures.fileName) {
          const [fileName] = pictures.uri.split('/').reverse();
          mutatedName = fileName;
        } else {
          mutatedName = pictures.fileName;
        }

        body.append('file', {
          name: mutatedName,
          uri: pictures.uri,
          type: 'image/jpeg',
        });
      }
    }

    dispatch(editProfile({ body: body, id: currentUser?.id }));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View
            style={{
              height: `${normalize(75)}%`,
              paddingHorizontal: normalize(16),
              paddingTop: normalize(24),
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomText
                  children={'edit_profile'}
                  globalStyle={{
                    ...FontStyle.text_h3.medium,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleSubmit(onSubmit)}
                  style={{ paddingHorizontal: normalize(10) }}>
                  <CustomText
                    children={'btn.save'}
                    globalStyle={{
                      ...FontStyle.text_h5.medium,
                      color: Colors.purple['500'],
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: normalize(70),
                      height: normalize(70),
                      borderRadius: normalize(35),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Controller
                      name={'image'}
                      control={control}
                      render={({ field: { value, onChange, onBlur } }) => {
                        return (
                          <MImage
                            source={{ uri: value || mutatedImage }}
                            style={{
                              width: normalize(60),
                              height: normalize(60),
                              borderRadius: normalize(30),
                              resizeMode: 'cover',
                            }}
                            type={'profile'}
                          />
                        );
                      }}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: normalize(15),
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: normalize(45),
                      }}
                      onPress={() => {
                        bottomSheetRef.current.show();
                      }}>
                      <View
                        style={{
                          width: normalize(30),
                          height: normalize(30),
                          borderRadius: normalize(8),
                          borderWidth: normalize(0.5),
                          borderColor: Colors.grey['200'],
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={require('../../../assets/images/upload.png')}
                          style={{
                            width: normalize(20),
                            height: normalize(20),
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <CustomText
                        children={'Upload an image'}
                        globalStyle={{
                          ...FontStyle.text_h5.regular,
                          marginLeft: normalize(10),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Controller
                  name={'data.firstName'}
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => {
                    return (
                      <Input
                        label={'first_name'}
                        placeholder="first_name"
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        errorText={value && errors.firstName}
                      />
                    );
                  }}
                />
                <Controller
                  name={'data.lastName'}
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => {
                    return (
                      <Input
                        label={'last_name'}
                        placeholder="last_name"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        errorText={value && errors.lastName}
                      />
                    );
                  }}
                />

                <Controller
                  name={'data.phoneNumber'}
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Input
                      label="phone_number"
                      placeholder="phone_number"
                      value={value}
                      onChange={onChange}
                      errorText={value && errors.phoneNumber}
                      onBlur={onBlur}
                    />
                  )}
                />
              </View>
              {/*<View*/}
              {/*  style={{*/}
              {/*    flex: 1,*/}
              {/*    justifyContent: 'flex-end',*/}
              {/*    marginBottom: insets.bottom ? insets?.bottom : normalize(16),*/}
              {/*  }}>*/}
              {/*  <TouchableOpacity*/}
              {/*    activeOpacity={0.8}*/}
              {/*    onPress={() =>*/}
              {/*      dispatch(showModal({ type: 'delete_account' }))*/}
              {/*    }*/}
              {/*    style={{*/}
              {/*      alignItems: 'center',*/}
              {/*      backgroundColor: Colors.red['500'],*/}
              {/*      paddingVertical: normalize(12),*/}
              {/*      paddingHorizontal: normalize(8),*/}
              {/*      borderRadius: normalize(12),*/}
              {/*      marginBottom: normalize(16),*/}
              {/*      ...Shadow,*/}
              {/*    }}>*/}
              {/*    <CustomText*/}
              {/*      children="Delete Account"*/}
              {/*      globalStyle={{*/}
              {/*        ...FontStyle.text_h5.regular,*/}
              {/*        color: Colors.white,*/}
              {/*      }}*/}
              {/*    />*/}
              {/*  </TouchableOpacity>*/}
              {/*</View>*/}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <BottomSheet
          hasDraggableIcon
          ref={bottomSheetRef}
          height={normalize(150)}>
          <View
            style={{
              justifyContent: 'center',
              padding: 20,
            }}>
            <ImagePicker setResponse={setResponse} />
          </View>
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditProfile;
