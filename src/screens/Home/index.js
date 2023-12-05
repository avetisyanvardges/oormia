import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './styles';
import Lottie from 'lottie-react-native';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'assets/RootStyles/normalize';

const Carousel = ({ autoScrollInterval = 5000 }) => {
  const [page, setPage] = useState(null);
  const [keyboardOpened, setKeyboardOpened] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      deviceInfo.ios ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardOpened(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      deviceInfo.ios ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardOpened(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={deviceInfo.ios ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View style={[styles.body]}>
          <View
            style={{
              ...styles.imageBlock,
              height: deviceInfo?.small_screen
                ? `${normalize(35)}%`
                : `${normalize(60)}%`,
            }}>
            <Lottie
              source={require('../../assets/lottie/travel.json')}
              autoPlay
              loop
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Carousel;
