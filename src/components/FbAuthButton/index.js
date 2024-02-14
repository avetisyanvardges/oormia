import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useContainer } from './hook';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { Styles } from './styles';
const FbAuthButton = () => {
  const { onFacebookButtonPress } = useContainer();
  const styles = Styles();
  return (
    <TouchableOpacity
      style={styles.socialItems}
      onPress={onFacebookButtonPress}>
      <Icon name={ICON_NAMES.BUTTON_ICON.FB} />
    </TouchableOpacity>
  );
};

export default FbAuthButton;
