import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MenuLink from 'components/MenuLink';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors, FontStyle} from 'assets/RootStyles';
import Header from 'components/Header';
import Icon from 'components/Svgs';
import {CustomText} from 'components/Text';
import {back} from 'services/NavigationService';
import {deviceInfo} from 'assets/deviceInfo';
import {userLogAuth} from 'state/user/operations/userLogOut';
import dispatch from 'utils/dispatch/dispatch';

const Settings = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: deviceInfo?.small_screen ? '80%' : '65%',
              paddingHorizontal: normalize(16),
              paddingTop: normalize(16),
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View
              style={{marginTop: normalize(4), marginBottom: normalize(12)}}>
              <Header title={'Settings'} backButtonVisible={false} />
            </View>
            <MenuLink title="Language" iconName={ICON_NAMES.PROFILE.LANGUAGE} />
            <MenuLink
              title="Notification and sound"
              iconName={ICON_NAMES.PROFILE.NOTIFICATION_AND_SOUND}
            />
            <MenuLink
              title="Preferences"
              iconName={ICON_NAMES.PROFILE.PREFERENCES}
            />
            <MenuLink
              title="Terms and Condition"
              iconName={ICON_NAMES.PROFILE.TERMS_AND_CONDITION}
            />
            <MenuLink
              title="Privacy Policy"
              iconName={ICON_NAMES.PROFILE.PRIVACY_POLICY}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {}}
              style={{
                paddingBottom: normalize(12),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: normalize(36),
                  height: normalize(36),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={ICON_NAMES.PROFILE.LOGOUT} color={Colors.red} />
              </View>
              <CustomText
                onPress={() => dispatch(userLogAuth())}
                children={'Log out'}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  color: Colors.red,
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Settings;
