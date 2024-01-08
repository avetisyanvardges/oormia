import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import MenuLink from 'components/MenuLink';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import Header from 'components/Header';
import { back, navigate } from 'services/NavigationService';
import { deviceInfo } from 'assets/deviceInfo';
import { routNames } from 'constants/routNames';

const AdminSettings = ({ navigation }) => {
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
              title="Not moderated events"
              iconName={ICON_NAMES.ADMIN.NOT_MODERATED_EVENT}
              onPress={() =>
                navigate(routNames.ADMIN_LAYER, {
                  screen: routNames.ADMIN.NOT_MODERATED,
                  initial: false,
                })
              }
            />
            <MenuLink
              title="Categories"
              iconName={ICON_NAMES.ADMIN.CATEGORIES}
              onPress={() =>
                navigate(routNames.ADMIN_LAYER, {
                  screen: routNames.ADMIN.CATEGORIES,
                  initial: false,
                })
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AdminSettings;
