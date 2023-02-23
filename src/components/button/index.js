import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../Text';
import {styles} from './style';


function Button({
  textButton = '',
  icon = '',
  onClick,
  styleButton = {},
  textStyle = {},
  disabled = '',
}) {
  const validStyle = disabled ? {opacity: 0.5} : {};
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{...styles.buttonDefaultStyle, ...styleButton, ...validStyle}}
      disabled={disabled}>
      {icon}
      <Text text={textButton} style={{...styles.textStyle, ...textStyle}} />
    </TouchableOpacity>
  );

}

export default Button;
