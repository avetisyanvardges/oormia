import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomText} from '../Text';
import {styles} from './style';


function Button({
  textButton = '',
  icon = '',
  onClick,
  styleButton = {},
  textStyle = {},
  disabled = false,
}) {
  const validStyle = disabled ? {opacity: 0.7} : {};
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.buttonDefaultStyle,
        ...styleButton,
        ...validStyle}}
      disabled={disabled}
    >
      {icon}
      <CustomText values={textButton} globalStyle={{...styles.textStyle, ...textStyle}} />
    </TouchableOpacity>
  );

}

export default Button;
