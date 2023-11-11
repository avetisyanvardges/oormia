import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { back } from 'services/NavigationService';
import Header from 'components/Header';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Styles } from './style';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Timer from 'components/timer';
import CountDownTimer from 'components/CountDown';

function OTPScreen(props) {
  const styles = Styles();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: normalize(40),
        backgroundColor: Colors.white,
      }}>
      <Header title={'Code Verification'} backPress={() => back()} />
      <CustomText
        children={'Enter verification code here'}
        globalStyle={{
          ...FontStyle.text_h5.regular,
          color: Colors.grey['100'],
        }}
      />
      <OTPInputView
        pinCount={6}
        style={{
          width: '90%',
          height: normalize(100),
        }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <CustomText
          children={'Send message again'}
          globalStyle={{
            ...FontStyle.text_h5.regular,
            color: Colors.grey['100'],
            textDecorationLine: 'underline',
          }}
        />
        <CountDownTimer />
      </TouchableOpacity>
    </View>
  );
}

export default OTPScreen;
