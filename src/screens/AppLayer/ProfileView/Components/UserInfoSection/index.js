import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Button from 'components/Button';
import { useSelector } from 'react-redux';
import MImage from 'components/MImage';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { back } from 'services/NavigationService';

const UserInfoSection = ({ speaker }) => {
  const [followed, setFollowed] = useState(false);

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
          activeOpacity={0.8}
          onPress={() => back()}
          style={{
            marginLeft: normalize(10),
            marginTop: normalize(10),
            width: normalize(30),
            height: normalize(30),
            borderRadius: normalize(20),
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            ...Shadow,
          }}>
          <Icon name={ICON_NAMES.ARROW.LEFT} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: -normalize(40),
            left: normalize(30),
          }}>
          <View
            style={{
              width: normalize(80),
              height: normalize(80),
              borderRadius: normalize(40),
              backgroundColor: Colors.purple['600'],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              children={speaker.firstName?.split('')?.[0]?.toUpperCase()}
              globalStyle={{
                ...FontStyle.text_h2.semi_bold,
                color: Colors.white,
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: normalize(140),
            marginTop: normalize(50),
            // backgroundColor: 'red',
          }}>
          <CustomText
            children={`${speaker.firstName} ${speaker.lastName}`}
            globalStyle={{ ...FontStyle.text_h3.medium, textAlign: 'center' }}
          />
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
              backgroundColor: followed
                ? Colors.grey['50']
                : Colors.purple['500'],
            }}
            title={followed ? 'unfollow' : 'follow'}
            textStyle={{
              flex: 1,
              textAlign: 'center',
              ...FontStyle.text_h5.regular,
              color: followed ? Colors.black['50'] : Colors.white,
            }}
            onPress={() => setFollowed(!followed)}
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
            title={'message'}
            textStyle={{
              flex: 1,
              textAlign: 'center',
              ...FontStyle.text_h5.regular,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UserInfoSection;
