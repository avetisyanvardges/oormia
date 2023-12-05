import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'components/Svgs';
import { Styles } from 'components/DropDown/styles';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { FormattedMessage } from 'react-intl';
import { CustomText } from 'components/Text';
import { ICON_NAMES } from 'components/Svgs/icon_names';

const DropDown = ({
  placeholder,
  value,
  label,
  onPress,
  renderIcon,
  style,
  validated,
  errorText,
  required,
  arrow_down_icon = true,
  disabled = false,
  supportMessage,
  showSupportMessage,
  loader,
}) => {
  const styles = Styles();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled || loader}
      onPress={onPress}
      style={{ ...style, marginTop: normalize(10) }}>
      {label && (
        <CustomText
          children={label}
          globalStyle={{
            ...FontStyle.text_h6.regular,
            color: Colors.grey['300'],
          }}
        />
      )}
      <View
        style={{
          borderRadius: normalize(8),
          paddingBottom: normalize(1.5),
          marginTop: normalize(2),
        }}>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.oxford_blue['30'],
              borderRadius: normalize(7),
              borderWidth: 1.5,
              borderColor: Colors.oxford_blue['30'],
              paddingHorizontal: normalize(12),
            },
            validated && { borderColor: Colors.red['500'], borderWidth: 1.5 },
          ]}>
          {renderIcon ? renderIcon() : null}
          {value || placeholder ? (
            <View
              style={{
                flex: 1,
                height: normalize(43),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {value ? (
                <Text style={styles.valueText}>{value}</Text>
              ) : placeholder ? (
                <Text style={styles.placeholderText}>
                  <CustomText children={placeholder} />
                </Text>
              ) : null}
            </View>
          ) : null}
          {arrow_down_icon && !disabled ? (
            <View style={{ transform: [{ rotate: '270deg' }] }}>
              <Icon name={ICON_NAMES.ARROW.LEFT} size={normalize(15)} />
            </View>
          ) : null}
        </View>
      </View>
      {validated ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(2),
          }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              ...FontStyle.text_h6.regular,
              color: Colors.red['500'],
            }}>
            {errorText ? (
              <FormattedMessage id={errorText}>
                {text => {
                  return text ? text : errorText;
                }}
              </FormattedMessage>
            ) : null}
          </Text>
        </View>
      ) : showSupportMessage && supportMessage ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(2),
          }}>
          <Text
            style={{ ...FontStyle.text_h6.regular, color: Colors.grey['300'] }}>
            {supportMessage}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default DropDown;
