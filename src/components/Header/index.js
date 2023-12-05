import React from 'react';
import { Text, View } from 'react-native';
import { back } from 'services/NavigationService';
import { Styles } from './styles';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { deviceInfo } from 'assets/deviceInfo';
import Input from 'components/Input';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Icon from 'components/Svgs';

const Header = ({
  backPress = () => back(),
  title = '',
  searchIcon = false,
  backIconColor,
  searchInput = false,
  onChangeText,
  searchValue = '',
  rightIcon = false,
  placeholder = '',
  renderRightIcon,
  backButtonVisible = true,
  renderTitle,
  handleBlur,
  inputError,
  backIconContainer,
  containerStyle,
  searchBackgroundColor,
}) => {
  const styles = Styles();
  return (
    <View style={[styles.container, containerStyle]}>
      {backButtonVisible && (
        <View style={[styles.icon_container, backIconContainer]}>
          <Icon
            onPress={backPress}
            name={ICON_NAMES.ARROW.LEFT}
            color={backIconColor}
          />
        </View>
      )}
      {renderTitle ? (
        renderTitle(title)
      ) : title ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingRight: normalize(30),
          }}>
          <Text
            style={{ ...FontStyle.text_h4.medium, color: Colors.grey['900'] }}>
            {title}
          </Text>
        </View>
      ) : null}

      {searchInput && (
        <View style={{ flex: 1 }}>
          <Input
            value={searchValue}
            onChangeText={onChangeText}
            placeholder={'search'}
            onBlurHandler={handleBlur}
            inputContainerStyles={{
              flex: 1,
              height: normalize(32),
              ...FontStyle.text_h5.regular,
              lineHeight: deviceInfo.ios ? 0 : normalize(20),
              paddingVertical: normalize(6),
              color: Colors.grey['500'],
              marginVertical: normalize(3),
            }}
            validated={inputError}
            errorText={inputError}
            backgroundColor={searchBackgroundColor}
          />
        </View>
      )}
      {rightIcon && renderRightIcon()}
    </View>
  );
};

export default Header;
