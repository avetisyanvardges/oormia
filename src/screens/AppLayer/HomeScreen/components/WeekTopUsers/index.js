import React from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import Underline from 'components/Underline';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { CustomText } from 'components/Text';
import { useSelector } from 'react-redux';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

const WeekTopUsers = () => {
  const { speakers } = useSelector(({ user }) => user);

  const renderWeekTopUsers = ({ item, index }) => {
    const mutatedImage = item?.pictures?.[
      item?.pictures.length - 1
    ]?.fileDownloadUri?.replace(':8085', ':8086');
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigate(routNames.CREATE_EVENT, {
            screen: 'send_request',
            speaker: item,
          });
        }}
        style={{
          ...Shadow,
          backgroundColor: Colors.white,
          borderRadius: normalize(12),
        }}>
        <FastImage
          source={{ uri: mutatedImage }}
          resizeMode="cover"
          style={{
            width: normalize(110),
            height: normalize(130),
            borderRadius: normalize(12),
            backgroundColor: Colors.white,
            overflow: 'hidden',
          }}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.5, 0.95]}
            colors={['rgba(0,0,0,.0)', Colors.grey['500']]}
            style={{
              flex: 1,
              height: normalize(70),
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <CustomText
                children={`${item.firstName} ${item?.lastName.slice(0, 1)}.`}
                globalStyle={{
                  ...FontStyle.text_h5.medium,
                  color: Colors.white,
                }}
              />
              <CustomText
                children={item.position}
                globalStyle={{
                  ...FontStyle.text_h6.medium,
                  color: Colors.white,
                }}
              />
            </View>
          </LinearGradient>
        </FastImage>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginHorizontal: normalize(16),
          margin: normalize(10),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CustomText
          children={'speakers'}
          globalStyle={{
            ...FontStyle.text_h4.regular,
          }}
        />
        {speakers.length > 6 ? (
          <CustomText
            children={'See all'}
            globalStyle={{
              ...FontStyle.text_h5.regular,
              color: Colors.oxford_blue['200'],
            }}
          />
        ) : null}
      </View>
      <FlatList
        horizontal
        data={speakers}
        renderItem={renderWeekTopUsers}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={ICON_NAMES.EMPTY_STATES.CHOOSE_SPEAKER}
                size={normalize(100)}
              />
              <CustomText
                children={'no_speakers_found'}
                globalStyle={{
                  ...FontStyle.text_h5.medium,
                  color: Colors.grey['500'],
                  marginTop: normalize(4),
                }}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: normalize(8) }} />}
        contentContainerStyle={{
          width: '100%',
          paddingHorizontal: normalize(16),
          paddingBottom: normalize(10),
        }}
      />
      <View
        style={{
          marginHorizontal: normalize(16),
          marginVertical: normalize(16),
        }}>
        <Underline height={normalize(1.5)} />
      </View>
    </View>
  );
};

export default WeekTopUsers;
