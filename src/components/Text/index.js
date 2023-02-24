import React from 'react';
import {Text} from 'react-native';
import {Styles} from 'components/Text/style';
import {FormattedMessage} from 'react-intl';

const CustomText = ({
  children,
  globalStyle,
  ellipsizeMode,
  numberOfLines,
  onPress,
  values,
}) => {
  const styles = Styles();
  return (
    <Text
      onPress={onPress}
      style={[styles.font, globalStyle]}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {/*<FormattedMessage id={children} values={values} />*/}
      {values}
    </Text>
  );
};

export {CustomText};
