import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useContainer } from './hook';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { Styles } from 'components/AppleAuthButton/styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  iosClientId:
    '944812769510-9p70fih63qdvk29cogq6kj27fb6hghbj.apps.googleusercontent.com',
  webClientId:
    '944812769510-kqdupndk9g1qs3jutlto97ma24tb3bc6.apps.googleusercontent.com',
});
const GoogleAuthButton = () => {
  const { onGoogleButtonPress } = useContainer();
  const styles = Styles();
  return (
    <TouchableOpacity onPress={onGoogleButtonPress} style={styles.socialItems}>
      <Icon name={ICON_NAMES.BUTTON_ICON.GOOGLE} />
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;
