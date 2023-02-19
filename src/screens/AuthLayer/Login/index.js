import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../assets/RootStyles';
import {deviceInfo} from '../../../assets/deviceInfo';
import Input from "../../../components/input";



const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.oxford_blue['50'],
      }}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            width: deviceInfo.deviceWidth,
            height: '70%',
            backgroundColor: Colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
          <Input title='password' titleStyle={{color:'blue'}}/>
      </View>
    </View>
  );
};

export default LoginScreen;
