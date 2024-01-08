import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Underline from 'components/Underline';
import SelectIcon from 'components/Svgs/Select';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import dispatch from 'utils/dispatch/dispatch';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { useSelector } from 'react-redux';
import MImage from 'components/MImage';
import { isEmpty } from 'lodash';

const ChooseSpeaker = ({ setScreen, speaker, setSpeaker }) => {
  const { speakers } = useSelector(({ user }) => user);
  useEffect(() => {
    dispatch(
      fetchAllUsers({
        params: {
          page: 0,
          size: 100,
          calendar: true,
        },
      }),
    );
  }, []);
  const renderSpeakerItem = ({ item }) => {
    const mutatedImage = item?.pictures?.[
      item?.pictures.length - 1
    ]?.fileDownloadUri?.replace(':8085', ':8086');
    return (
      <TouchableOpacity
        onPress={() => {
          setSpeaker(item);
          setScreen('send_request');
        }}
        style={{
          flexDirection: 'row',
          height: normalize(116),
          borderRadius: normalize(10),
          backgroundColor: Colors.white,
          alignItems: 'center',
          ...Shadow,
        }}>
        <MImage
          source={{ uri: mutatedImage }}
          style={{
            width: normalize(88),
            height: normalize(116),
            borderTopLeftRadius: normalize(10),
            borderBottomLeftRadius: normalize(10),
            backgroundColor: Colors.white,
            overflow: 'hidden',
          }}
          type={'profile'}
        />
        {/*<Image*/}
        {/*  source={images.speakers[imageName.toLowerCase()]}*/}
        {/*  resizeMode="cover"*/}
        {/*  style={{*/}
        {/*    width: normalize(88),*/}
        {/*    height: normalize(116),*/}
        {/*    borderTopLeftRadius: normalize(10),*/}
        {/*    borderBottomLeftRadius: normalize(10),*/}
        {/*    overflow: 'hidden',*/}
        {/*  }}*/}
        {/*/>*/}
        <View style={{ flex: 1, marginLeft: normalize(15) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <CustomText
                children={`${item.firstName} ${item?.lastName}`}
                globalStyle={{
                  ...FontStyle.text_h5.medium,
                  marginTop: normalize(3),
                }}
              />
              <CustomText
                children={item.position}
                globalStyle={{
                  ...FontStyle.text_h6.medium,
                  color: Colors.oxford_blue['200'],
                }}
              />
            </View>

            <View style={{ position: 'absolute', right: normalize(15) }}>
              <SelectIcon
                width={normalize(24)}
                height={normalize(24)}
                color={Colors.purple['500']}
              />
            </View>
          </View>
          <Underline
            height={normalize(1.5)}
            style={{ marginVertical: normalize(2) }}
          />
          <CustomText
            children={item.about}
            ellipsizeMode={'tail'}
            numberOfLines={2}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginTop: normalize(2),
            }}
          />
          <CustomText
            children={item.phoneNumber}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              color: Colors.oxford_blue['200'],
              marginTop: normalize(4),
            }}
          />
          <CustomText
            children={item.email}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              color: Colors.oxford_blue['200'],
              marginTop: normalize(4),
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.grey['50'],
        paddingBottom: normalize(50),
      }}>
      <FlatList
        data={speakers}
        renderItem={renderSpeakerItem}
        ItemSeparatorComponent={() => (
          <View style={{ height: normalize(16) }} />
        )}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name={ICON_NAMES.EMPTY_STATES.CHOOSE_SPEAKER} />
              </View>
              <CustomText
                children={'No Speakers Found'}
                globalStyle={{
                  ...FontStyle.text_h2.medium,
                  color: Colors.grey['500'],
                  marginTop: normalize(4),
                }}
              />
              <CustomText
                children={
                  'It seems like there are no speakers available at the moment. '
                }
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  color: Colors.oxford_blue['200'],
                  textAlign: 'center',
                }}
              />
            </View>
          );
        }}
        contentContainerStyle={[
          {
            marginHorizontal: normalize(16),
            paddingBottom: normalize(100),
          },
          isEmpty(speakers)
            ? {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }
            : null,
        ]}
      />
    </View>
  );
};

export { ChooseSpeaker };
