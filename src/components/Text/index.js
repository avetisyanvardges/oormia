import React from 'react';
import { Text } from 'react-native';
import { Styles } from 'components/Text/style';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const CustomText = ({
  children,
  globalStyle,
  ellipsizeMode,
  numberOfLines,
  onPress,
  values,
  translate = true,
}) => {
  const { t } = useTranslation();
  const styles = Styles();
  return (
    <Text
      onPress={onPress}
      style={[styles.font, globalStyle]}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {/*<FormattedMessage id={children} values={values} />*/}
      {translate ? t(children, values) : children}
    </Text>
  );
};

export { CustomText };
