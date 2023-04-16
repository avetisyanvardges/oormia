import React from 'react';
import {ImageBackground, View} from 'react-native';
import useContainer from './hook';
import Button from 'components/Button';
import {Colors, fullScreen} from 'assets/RootStyles';
import {normalize} from 'assets/RootStyles/normalize';

const OnboardingScreen = () => {
  const {path, resizeType, insets} = useContainer();

  return (
    <ImageBackground
      source={path}
      style={{width: '100%', height: '100%'}}
      resizeMode={resizeType}>
      <View
        style={{
          flex: 1,
          marginTop: insets.top,
          marginHorizontal: normalize(16),
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            height: 5,
            backgroundColor: '#AFADAD',
            borderRadius: normalize(100),
            marginRight: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: 5,
              backgroundColor: Colors.white,
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 5,
            backgroundColor: '#AFADAD',
            borderRadius: normalize(100),
            marginRight: 5,
          }}
        />
        <View
          style={{
            flex: 1,
            height: 5,
            backgroundColor: '#AFADAD',
            borderRadius: normalize(100),
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: insets.bottom + normalize(16),
        }}>
        <Button
          title="Log in"
          containerStyle={{
            marginBottom: normalize(16),
          }}
          textColor={Colors.white}
        />
        <Button
          title="Sign Up"
          containerStyle={{backgroundColor: Colors.white}}
          textColor={Colors.blue['300']}
        />
      </View>
    </ImageBackground>
  );
};

export {OnboardingScreen};
