import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { back } from 'services/NavigationService';
import Header from 'components/Header';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Styles } from './style';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import dispatch from 'utils/dispatch/dispatch';
import { verifyCode } from 'state/user/operations/verifyCode';
import { clean_verification_token } from 'state/user';
import moment from 'moment';
import { resendCode } from 'state/user/operations/resendCode';

function OTPScreen({ navigation, route }) {
  const [code, setCode] = useState('');
  const email = route?.params?.email;
  const [resendTime, setResendTime] = useState(59);
  const [errorMessage, setErrorMessage] = useState('');
  const styles = Styles();

  useEffect(() => {
    const createDate = moment();
    const currentDate = moment(new Date());

    const diff = currentDate.diff(createDate, 'seconds');
    setResendTime(59 - diff);
  }, []);

  useEffect(() => {
    if (code.length === 6) {
      handleCodeFill();
    }
  }, [code]);

  const handleCodeFill = () => {
    dispatch(verifyCode({ code }));
  };

  useEffect(() => {
    resendTime > 0
      ? setTimeout(() => {
          setResendTime(resendTime - 1);
        }, 1000)
      : setErrorMessage('');
  }, [resendTime]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(clean_verification_token());
    });
    return () => {
      unsubscribe();
    };
  });

  const handleChangeCode = useCallback(
    code => {
      setCode(code);
    },
    [code],
  );

  console.log(email);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: normalize(40),
        backgroundColor: Colors.white,
      }}>
      <Header
        title={'Code Verification'}
        backPress={() => {
          console.log('OTPScreen back');

          back();
        }}
      />
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
        onCodeChanged={handleChangeCode}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(resendCode({ email }));
        }}
        style={{ flexDirection: 'row' }}>
        <CustomText
          children={'Send message again'}
          globalStyle={{
            ...FontStyle.text_h5.regular,
            color: Colors.grey['100'],
            textDecorationLine: 'underline',
          }}
        />
        <CustomText children={resendTime} />
      </TouchableOpacity>
    </View>
  );
}

export default OTPScreen;
