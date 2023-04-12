import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from 'assets/RootStyles';
import {deviceInfo} from 'assets/deviceInfo';
import {normalize} from 'assets/RootStyles/normalize';

const ScreenMask = ({children, style, containerStyle={}, isComplete=null}) => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', ...containerStyle}}>
      <View
        style={{
          width: deviceInfo.deviceWidth,
          height: '100%',
          backgroundColor: Colors.white,
          borderTopLeftRadius:!isComplete?normalize(20):0,
          borderTopRightRadius:!isComplete?normalize(20):0,
          ...style,
        }}>
        <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
      </View>
    </View>
  );
};

export default ScreenMask;
