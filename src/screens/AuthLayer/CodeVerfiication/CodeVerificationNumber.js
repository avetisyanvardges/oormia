import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomText} from 'components/Text';
import {styles} from './style';

function CodeVerificationNumber({
  numberText,
  onClick,
}) {
  return (
    <TouchableOpacity
      style={styles.numberContainer}
      onPress={() => onClick(numberText)}>
      <CustomText values={numberText} globalStyle={styles.numberTextStyle} />
    </TouchableOpacity>
  );
}

export default CodeVerificationNumber;
