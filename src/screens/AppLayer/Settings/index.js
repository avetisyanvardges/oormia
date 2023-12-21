import React from 'react';
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MenuLink from 'components/MenuLink';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import Header from 'components/Header';
import Icon from 'components/Svgs';
import { CustomText } from 'components/Text';
import { back, navigate } from 'services/NavigationService';
import { deviceInfo } from 'assets/deviceInfo';
import { userLogAuth } from 'state/user/operations/userLogOut';
import dispatch from 'utils/dispatch/dispatch';
import { routNames } from 'constants/routNames';
import { showModal } from 'state/modal';

const Settings = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: deviceInfo?.small_screen ? '50%' : '40%',
              paddingHorizontal: normalize(16),
              paddingTop: normalize(16),
              backgroundColor: Colors.oxford_blue['30'],
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View
              style={{ marginTop: normalize(4), marginBottom: normalize(12) }}>
              <Header
                title={'Settings'}
                backButtonVisible={false}
                containerStyle={{ paddingTop: 0 }}
              />
            </View>

            {/*<MenuLink*/}
            {/*  title="Notification and sound"*/}
            {/*  iconName={ICON_NAMES.PROFILE.NOTIFICATION_AND_SOUND}*/}
            {/*/>*/}
            {/*<MenuLink title="OOrmia PREMIUM" iconName={ICON_NAMES.PREMIUM} />*/}
            {/*<MenuLink*/}
            {/*  title="Preferences"*/}
            {/*  iconName={ICON_NAMES.PROFILE.PREFERENCES}*/}
            {/*/>*/}
            {/*<MenuLink title="Language" iconName={ICON_NAMES.PROFILE.LANGUAGE} />*/}
            {/*<MenuLink*/}
            {/*  title="Change password"*/}
            {/*  iconName={ICON_NAMES.LOCK}*/}
            {/*  onPress={() => navigate(routNames.ACCOUNT_SETTINGS)}*/}
            {/*/>*/}
            <MenuLink
              title="Privacy Policy"
              iconName={ICON_NAMES.PROFILE.PRIVACY_POLICY}
              onPress={() =>
                navigate(routNames.WEB_VIEW, {
                  uri: 'https://www.oormia.com/privacy/',
                })
              }
            />
            <MenuLink
              title="Delete Account"
              iconName={ICON_NAMES.REMOVE}
              onPress={() => dispatch(showModal({ type: 'delete_account' }))}
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
                  borderRadius: normalize(18),
                  backgroundColor: Colors.red['50'],
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={ICON_NAMES.PROFILE.LOGOUT}
                  color={Colors.red['500']}
                />
              </View>
              <CustomText
                onPress={() => dispatch(userLogAuth())}
                children={'Log out'}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  color: Colors.red['500'],
                  marginLeft: normalize(8),
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                marginBottom: normalize(20),
              }}>
              <Text style={{ ...FontStyle.text_h6.regular }}>
                <CustomText
                  children={'App version'}
                  globalStyle={{
                    color: Colors.oxford_blue['200'],
                  }}
                />
                <Text
                  style={{
                    color: Colors.oxford_blue['100'],
                  }}>
                  {' ' + deviceInfo.appVersion}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Settings;
