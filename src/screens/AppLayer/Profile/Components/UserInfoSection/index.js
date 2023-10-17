import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors, FontStyle, Shadow} from 'assets/RootStyles';
import {CustomText} from 'components/Text';
import Button from 'components/Button';
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {navigate} from 'services/NavigationService';
import {routNames} from 'constants/routNames';

const UserInfoSection = () => {
  const currentUser = true;
  return (
    <View style={{paddingHorizontal: normalize(16)}}>
      <ImageBackground
        source={require('../../../../../assets/images/profile_bg.jpeg')}
        style={{
          height: normalize(150),
          ...Shadow,
        }}
        borderRadius={normalize(12)}>
        <View
          style={{
            position: 'absolute',
            bottom: -normalize(40),
            left: normalize(30),
          }}>
          <Image
            source={require('../../../../../assets/images/profile_1.jpg')}
            style={{
              width: normalize(80),
              height: normalize(80),
              borderRadius: normalize(40),
              resizeMode: 'cover',
            }}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            marginTop: normalize(50),
          }}>
          <CustomText
            children={'Name Surname'}
            globalStyle={{...FontStyle.text_h3.medium}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: normalize(5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: normalize(8),
              }}>
              <Icon
                name={ICON_NAMES.PROFILE.TRIPS}
                size={normalize(20)}
                style={{marginRight: normalize(4)}}
              />
              <CustomText
                children={'23'}
                globalStyle={{...FontStyle.text_h5.regular}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: normalize(8),
              }}>
              <Icon
                name={ICON_NAMES.PROFILE.EVENTS}
                size={normalize(20)}
                style={{marginRight: normalize(4)}}
              />
              <CustomText
                children={'23'}
                globalStyle={{...FontStyle.text_h5.regular}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: normalize(8),
              }}>
              <Icon
                name={ICON_NAMES.PROFILE.FRIENDS}
                size={normalize(20)}
                style={{marginRight: normalize(4)}}
              />
              <CustomText
                children={'651'}
                globalStyle={{...FontStyle.text_h5.regular}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: normalize(28),
            paddingLeft: normalize(16),
          }}>
          <Button
            containerStyle={{
              width: '100%',
              paddingVertical: normalize(6),
              marginBottom: normalize(12),
            }}
            title={!currentUser ? 'Follow' : 'Settings'}
            textStyle={{...FontStyle.text_h5.medium, color: Colors.white}}
            onPress={() => {
              if (!currentUser) {
              } else {
                navigate(routNames.SETTINGS);
              }
            }}
          />
          <Button
            containerStyle={{
              width: '100%',
              paddingVertical: normalize(6),
              backgroundColor: Colors.grey['50'],
            }}
            title={!currentUser ? 'Message' : 'Edit profile'}
            textStyle={{...FontStyle.text_h5.medium}}
          />
        </View>
      </View>
    </View>
  );
};

export default UserInfoSection;
