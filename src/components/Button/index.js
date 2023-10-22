import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CustomText } from '../Text';
import { styles } from './style';

function Button({
  title = '',
  icon = '',
  onPress,
  containerStyle = {},
  textStyle = {},
  disabled = false,
}) {
  const validStyle = disabled ? { opacity: 0.7 } : {};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.buttonDefaultStyle,
        ...containerStyle,
        ...validStyle,
      }}
      disabled={disabled}>
      {icon}
      <CustomText
        children={title}
        globalStyle={{ ...styles.textStyle, ...textStyle }}
      />
    </TouchableOpacity>
  );
}

export default Button;
