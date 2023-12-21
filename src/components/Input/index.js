import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'assets/RootStyles/normalize';
import styles from './style';
import { CustomText } from '../Text';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { Colors, FontStyle } from 'assets/RootStyles';

function Input({
  label = '',
  labelStyle = {},
  secure = false,
  onBlur,
  errorText,
  placeholder = '',
  value = '',
  inputContainerStyle = {},
  onChange,
  search,
  validated,
  showSupportMessage,
  renderRightIcon,
  onPress,
  editable,
  multiline = false,
  autoCapitalize = 'none',
  backgroundColor = Colors.oxford_blue['30'],
}) {
  const [focused, setFocused] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);
  return (
    <KeyboardAvoidingView
      {...(deviceInfo.ios
        ? {
            behavior: 'padding',
            keyboardVerticalOffset: normalize(10),
            enabled: true,
          }
        : {})}>
      <TouchableOpacity
        activeOpacity={onPress ? 0.8 : 1}
        style={{
          marginTop: normalize(10),
        }}
        onPress={onPress}>
        {label ? (
          <CustomText
            children={label}
            globalStyle={{
              ...styles.label,
              ...labelStyle,
            }}
          />
        ) : null}
        <View
          style={{
            backgroundColor: focused
              ? Colors.purple['500']
              : validated
              ? Colors.red
              : Colors.oxford_blue['30'],
            borderRadius: normalize(8),
            paddingBottom: normalize(1.5),
            marginTop: normalize(2),
          }}>
          <View style={{ ...styles.container, ...inputContainerStyle }}>
            <View
              style={{
                ...styles.inputContainerDef,
                backgroundColor: backgroundColor,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={styles.inputDefault}
                  onPressIn={onPress}
                  placeholderTextColor={Colors.oxford_blue['200']}
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={() => {
                    onBlur();
                    setFocused(false);
                  }}
                  editable={editable}
                  onFocus={() => setFocused(true)}
                  secureTextEntry={secure && viewPassword}
                  multiline={multiline}
                  autoCapitalize={autoCapitalize}
                />
                <View style={{ alignItems: 'flex-end' }}>
                  {renderRightIcon ? (
                    renderRightIcon()
                  ) : secure ? (
                    <Pressable onPress={() => setViewPassword(!viewPassword)}>
                      {
                        <Icon
                          name={
                            viewPassword
                              ? ICON_NAMES.INPUT_BTN.EYE_OPEN
                              : ICON_NAMES.INPUT_BTN.EYE_CLOSE
                          }
                        />
                      }
                    </Pressable>
                  ) : value && focused ? (
                    <TouchableOpacity
                      onPress={() => {
                        onChange('');
                      }}>
                      {<Icon name={ICON_NAMES.INPUT_BTN.CLEAR} />}
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
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
              {errorText ? <CustomText children={errorText} /> : null}
            </Text>
          </View>
        ) : null}

        {value && !search && showSupportMessage ? (
          <CustomText
            values={errorText ? errorText : 'Support message'}
            globalStyle={{
              color: errorText ? Colors.red : Colors.gray,
            }}
          />
        ) : null}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Input;
