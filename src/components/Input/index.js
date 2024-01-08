import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'assets/RootStyles/normalize';
import styles from './style';
import { CustomText } from '../Text';
import Icon from 'components/Svgs';
import { Colors, FontStyle } from 'assets/RootStyles';
import i18n from 'i18next';
import * as Animatable from 'react-native-animatable';
import { ICON_NAMES } from 'components/Svgs/icon_names';

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
  values,
  showValidation,
}) {
  const { t } = i18n;
  const [focused, setFocused] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);
  const translatedPlaceholder = placeholder
    ? t(`placeholder.${placeholder}`, values)
    : t('label.empty', values);

  function validate(password, type) {
    const reg = {
      char: new RegExp(/^[\s\S]{8,32}$/),
      upper: new RegExp(/[A-Z]/),
      lower: new RegExp(/[a-z]/),
      number: new RegExp(/[0-9]/),
      symbol: new RegExp(/(?=(.*[!@#$%^&*()\-__+.])+)/),
    };
    const key = reg[type];
    return password.match(key);
  }

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
            children={`label.${label}`}
            globalStyle={{
              ...styles.label,
              ...labelStyle,
            }}
          />
        ) : null}
        <View
          style={{
            backgroundColor: validated
              ? Colors.red['500']
              : focused
              ? Colors.purple['500']
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
                  placeholder={translatedPlaceholder}
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
        {validated && errorText !== 'label.empty' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: normalize(2),
            }}>
            {errorText ? (
              <CustomText
                children={errorText}
                numberOfLines={1}
                ellipsizeMode="tail"
                globalStyle={{
                  ...FontStyle.text_h6.regular,
                  color: Colors.red['500'],
                }}
              />
            ) : null}
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
        {(value || validated) && showValidation ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(5),
              }}>
              {validate(value, 'lower') ? (
                <Animatable.View
                  animation={'pulse'}
                  easing={'ease-out'}
                  useNativeDriver
                  style={{
                    marginRight: normalize(8),
                  }}>
                  <Icon name={ICON_NAMES.CHECKBOX.ON} />
                </Animatable.View>
              ) : (
                <Animatable.View
                  animation={'tada'}
                  easing={'ease-out'}
                  useNativeDriver
                  style={{
                    width: normalize(24),
                    height: normalize(24),
                    backgroundColor: Colors.red['50'],
                    borderRadius: normalize(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: normalize(5),
                  }}>
                  <Icon
                    name={ICON_NAMES.INPUT_BTN.CLEAR}
                    color={Colors.red['500']}
                  />
                </Animatable.View>
              )}
              <CustomText
                children={'password.validation.lower'}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                globalStyle={[
                  {
                    color: validate(value, 'lower')
                      ? Colors.green['500']
                      : !validate(value, 'lower') && validated
                      ? Colors.red['500']
                      : Colors.oxford_blue['100'],
                  },
                ]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(5),
              }}>
              {validate(value, 'upper') ? (
                <Animatable.View
                  animation={'pulse'}
                  easing={'ease-out'}
                  useNativeDriver
                  style={{
                    marginRight: normalize(8),
                  }}>
                  <Icon name={ICON_NAMES.CHECKBOX.ON} />
                </Animatable.View>
              ) : (
                <Animatable.View
                  animation={'tada'}
                  useNativeDriver
                  style={{
                    width: normalize(24),
                    height: normalize(24),
                    backgroundColor: Colors.red['50'],
                    borderRadius: normalize(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: normalize(5),
                  }}>
                  <Icon
                    name={ICON_NAMES.INPUT_BTN.CLEAR}
                    color={Colors.red['500']}
                  />
                </Animatable.View>
              )}
              <CustomText
                children={'password.validation.upper'}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                globalStyle={[
                  styles.validation_description,
                  {
                    color: validate(value, 'upper')
                      ? Colors.green['500']
                      : !validate(value, 'upper') && validated
                      ? Colors.red['500']
                      : Colors.oxford_blue['100'],
                  },
                ]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(5),
              }}>
              {validate(value, 'symbol') ? (
                <Animatable.View
                  animation={'pulse'}
                  easing={'ease-out'}
                  useNativeDriver
                  style={{
                    marginRight: normalize(8),
                  }}>
                  <Icon name={ICON_NAMES.CHECKBOX.ON} />
                </Animatable.View>
              ) : (
                <Animatable.View
                  animation={'tada'}
                  useNativeDriver
                  style={{
                    width: normalize(24),
                    height: normalize(24),
                    backgroundColor: Colors.red['50'],
                    borderRadius: normalize(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: normalize(5),
                  }}>
                  <Icon
                    name={ICON_NAMES.INPUT_BTN.CLEAR}
                    color={Colors.red['500']}
                  />
                </Animatable.View>
              )}
              <CustomText
                children={'password.validation.symbol'}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                globalStyle={[
                  styles.validation_description,
                  {
                    color: validate(value, 'symbol')
                      ? Colors.green['500']
                      : !validate(value, 'symbol') && validated
                      ? Colors.red['500']
                      : Colors.oxford_blue['100'],
                  },
                ]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(5),
              }}>
              {validate(value, 'number') ? (
                <Animatable.View
                  animation={'pulse'}
                  easing={'ease-out'}
                  useNativeDriver
                  style={{
                    marginRight: normalize(8),
                  }}>
                  <Icon name={ICON_NAMES.CHECKBOX.ON} />
                </Animatable.View>
              ) : (
                <Animatable.View
                  animation={'tada'}
                  useNativeDriver
                  style={{
                    width: normalize(24),
                    height: normalize(24),
                    backgroundColor: Colors.red['50'],
                    borderRadius: normalize(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: normalize(5),
                  }}>
                  <Icon
                    name={ICON_NAMES.INPUT_BTN.CLEAR}
                    color={Colors.red['500']}
                  />
                </Animatable.View>
              )}
              <CustomText
                children={'password.validation.number'}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                globalStyle={[
                  styles.validation_description,
                  {
                    color: validate(value, 'number')
                      ? Colors.green['500']
                      : !validate(value, 'number') && validated
                      ? Colors.red['500']
                      : Colors.oxford_blue['100'],
                  },
                ]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(5),
              }}>
              {validate(value, 'char') ? (
                <Animatable.View
                  animation={'pulse'}
                  easing={'ease-out'}
                  useNativeDriver
                  style={{
                    marginRight: normalize(8),
                  }}>
                  <Icon name={ICON_NAMES.CHECKBOX.ON} />
                </Animatable.View>
              ) : (
                <Animatable.View
                  animation={'tada'}
                  useNativeDriver
                  style={{
                    width: normalize(24),
                    height: normalize(24),
                    backgroundColor: Colors.red['50'],
                    borderRadius: normalize(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: normalize(5),
                  }}>
                  <Icon
                    name={ICON_NAMES.INPUT_BTN.CLEAR}
                    color={Colors.red['500']}
                  />
                </Animatable.View>
              )}
              <CustomText
                children={'password.validation.char'}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                globalStyle={[
                  styles.validation_description,
                  {
                    color: validate(value, 'char')
                      ? Colors.green['500']
                      : !validate(value, 'char') && validated
                      ? Colors.red['500']
                      : Colors.oxford_blue['100'],
                  },
                ]}
              />
            </View>
          </View>
        ) : null}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Input;
