import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomText} from 'components/Text';

function CodeVerificationNumber({
  numberText,
  numberTextStyle,
  numberContainerStyle,
  onClick,
}) {
  return (
    <TouchableOpacity
      style={numberContainerStyle}
      onPress={() => onClick(numberText)}>
      <CustomText values={numberText} globalStyle={numberTextStyle} />
    </TouchableOpacity>
  );
}

export default CodeVerificationNumber;
