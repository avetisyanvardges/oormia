import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Button from 'components/Button';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { useSelector } from 'react-redux';
import MImage from 'components/MImage';

const UserInfoSection = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const { firstName, lastName } = currentUser || {};
  const [imageError, setImageError] = useState(false);
  const mutatedImage = currentUser?.pictures?.[
    currentUser?.pictures.length - 1
  ]?.fileDownloadUri?.replace(':8085', ':8086');

  return (
    <View style={{ paddingHorizontal: normalize(16) }}>
      <ImageBackground
        source={require('../../../../../assets/images/profile_bg.jpeg')}
        style={{
          height: normalize(150),
          ...Shadow,
        }}
        borderRadius={normalize(12)}>
        <TouchableOpacity
          onPress={() => navigate(routNames.SETTINGS)}
          onLongPress={() => {
            if (currentUser.role === 'ADMIN') {
              navigate(routNames.ADMIN_SETTINGS);
            }
          }}
          style={{
            top: normalize(16),
            right: normalize(16),
            position: 'absolute',
          }}>
          <Icon name={ICON_NAMES.SETTINGS} color={Colors.white} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: -normalize(40),
            left: normalize(30),
          }}>
          <MImage
            source={
              mutatedImage && !imageError
                ? { uri: mutatedImage }
                : require('../../../../../assets/images/noPic.jpeg')
            }
            style={{
              width: normalize(80),
              height: normalize(80),
              borderRadius: normalize(40),
              resizeMode: 'cover',
            }}
            loaderStyle={{
              width: normalize(130),
              height: normalize(130),
            }}
            // fallback={true}
            loader={true}
            onError={() => {
              console.log('ERROR');
              setImageError(true);
            }}
            type={'profile'}
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
            children={`${firstName} ${lastName}`}
            globalStyle={{ ...FontStyle.text_h3.medium }}
          />
          {/*<View*/}
          {/*  style={{*/}
          {/*    flexDirection: 'row',*/}
          {/*    alignItems: 'center',*/}
          {/*    marginTop: normalize(5),*/}
          {/*  }}>*/}
          {/*  <View*/}
          {/*    style={{*/}
          {/*      flexDirection: 'row',*/}
          {/*      alignItems: 'center',*/}
          {/*      marginRight: normalize(8),*/}
          {/*    }}>*/}
          {/*    <Icon*/}
          {/*      name={ICON_NAMES.PROFILE.TRIPS}*/}
          {/*      size={normalize(20)}*/}
          {/*      style={{ marginRight: normalize(4) }}*/}
          {/*    />*/}
          {/*    <CustomText*/}
          {/*      children={'0'}*/}
          {/*      globalStyle={{ ...FontStyle.text_h5.regular }}*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*  <View*/}
          {/*    style={{*/}
          {/*      flexDirection: 'row',*/}
          {/*      alignItems: 'center',*/}
          {/*      marginRight: normalize(8),*/}
          {/*    }}>*/}
          {/*    <Icon*/}
          {/*      name={ICON_NAMES.PROFILE.EVENTS}*/}
          {/*      size={normalize(20)}*/}
          {/*      style={{ marginRight: normalize(4) }}*/}
          {/*    />*/}
          {/*    <CustomText*/}
          {/*      children={'0'}*/}
          {/*      globalStyle={{ ...FontStyle.text_h5.regular }}*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*  <View*/}
          {/*    style={{*/}
          {/*      flexDirection: 'row',*/}
          {/*      alignItems: 'center',*/}
          {/*      marginRight: normalize(8),*/}
          {/*    }}>*/}
          {/*    <Icon*/}
          {/*      name={ICON_NAMES.PROFILE.FRIENDS}*/}
          {/*      size={normalize(20)}*/}
          {/*      style={{ marginRight: normalize(4) }}*/}
          {/*    />*/}
          {/*    <CustomText*/}
          {/*      children={'0'}*/}
          {/*      globalStyle={{ ...FontStyle.text_h5.regular }}*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*</View>*/}
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
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
            icon={
              currentUser ? (
                <Icon
                  name={ICON_NAMES.CALENDAR}
                  color={Colors.white}
                  size={normalize(20)}
                />
              ) : null
            }
            title={!currentUser ? 'follow' : 'Calendar'}
            textStyle={{
              flex: 1,
              textAlign: 'center',
              ...FontStyle.text_h5.regular,
              color: Colors.white,
            }}
            onPress={() => {
              if (!currentUser) {
              } else {
                navigate(routNames.FREE_DAYS_CALENDAR);
              }
            }}
          />
          <Button
            containerStyle={{
              width: '100%',
              paddingVertical: normalize(6),
              backgroundColor: Colors.grey['50'],
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
            icon={
              currentUser ? (
                <Icon name={ICON_NAMES.EDIT_PROFILE} size={normalize(20)} />
              ) : null
            }
            title={!currentUser ? 'message' : 'edit_profile'}
            textStyle={{
              flex: 1,
              textAlign: 'center',
              ...FontStyle.text_h5.regular,
            }}
            onPress={() => {
              if (!currentUser) {
              } else {
                navigate(routNames.EDIT_PROFILE);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UserInfoSection;
