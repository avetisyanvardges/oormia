import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './styles';
import Login from 'screens/AuthLayer/Login';
import Lottie from 'lottie-react-native';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'assets/RootStyles/normalize';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import Icon from 'components/Svgs';
import { CustomText } from 'components/Text';
import { Colors, FontStyle } from 'assets/RootStyles';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LOGIN = 'login';
const SIGN_UP = 'signUp';
const FORGOT = 'forgotPassword';

const { width: screenWidth } = Dimensions.get('window');

const Home = ({ navigation, route }) => {
  const { i18n, t } = useTranslation();
  const insets = useSafeAreaInsets();
  const [page, setPage] = useState(null);
  const [keyboardOpened, setKeyboardOpened] = useState(false);

  const pages = {
    [LOGIN]: <Login />,
  };

  useEffect(() => {
    if (route?.params?.page) {
      setPage(LOGIN);
    }
  }, [route]);
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
          <View
            style={{
              position: 'absolute',
              top: insets.top || normalize(20),
              right: normalize(16),
            }}>
            <TouchableOpacity
              onPress={() => navigate(routNames.LANGUAGE)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(18),
                overflow: 'hidden',
                backgroundColor: Colors.white,
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(8),
                borderRadius: normalize(12),
              }}>
              <Icon name={i18n.language} />
              <CustomText
                children={`locales.${i18n.language}`}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  marginLeft: normalize(6),
                }}
              />
            </TouchableOpacity>
          </View>
          <Login
            SIGN_UP={SIGN_UP}
            LOGIN={LOGIN}
            FORGOT={FORGOT}
            page={page}
            setPage={setPage}
            keyboardOpened={keyboardOpened}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
