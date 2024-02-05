import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useContainer } from './hook';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { Styles } from 'components/AppleAuthButton/styles';

const AppleAuthButton = () => {
  const { onAppleButtonPress } = useContainer();
  const styles = Styles();
  return (
    <TouchableOpacity onPress={onAppleButtonPress} style={styles.socialItems}>
      <Icon name={ICON_NAMES.BUTTON_ICON.APPLE} />
    </TouchableOpacity>
  );
};

export default AppleAuthButton;
