import React from 'react';
import { PermissionsAndroid, Pressable } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { CustomText } from 'components/Text';
import { normalize } from 'assets/RootStyles/normalize';
import { Gallery } from 'components/Svgs/Gallery/Gallery';
import { Camera } from 'components/Svgs/Camera/Camera';

const ImagePicker = ({ setResponse }) => {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await launchCamera(
          {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
          },
          setResponse,
        );
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: normalize(10),
        }}
        onPress={() => requestCameraPermission()}>
        <Camera />
        <CustomText
          children={'Take Photo...'}
          globalStyle={{ fontSize: normalize(18), marginLeft: normalize(5) }}
        />
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: normalize(10),
        }}
        onPress={() => {
          launchImageLibrary(
            {
              selectionLimit: 0,
              mediaType: 'photo',
              includeBase64: false,
            },
            setResponse,
          );
        }}>
        <Gallery />
        <CustomText
          children={'Choose from Library...'}
          globalStyle={{ fontSize: normalize(18), marginLeft: normalize(5) }}
        />
      </Pressable>
    </>
  );
};

export default ImagePicker;
