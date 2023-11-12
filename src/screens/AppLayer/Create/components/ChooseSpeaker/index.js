import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import images from 'assets/images';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Underline from 'components/Underline';
import SelectIcon from 'components/Svgs/Select';

const ChooseSpeaker = ({ setScreen, speaker, setSpeaker }) => {
  const renderSpeakerItem = ({ item }) => {
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
        }}>
        <Image
          source={images.speakers[item]}
          resizeMode="cover"
          style={{
            width: normalize(88),
            height: normalize(116),
            borderTopLeftRadius: normalize(10),
            borderBottomLeftRadius: normalize(10),
            overflow: 'hidden',
          }}
        />
        <View style={{ flex: 1, marginLeft: normalize(15) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <CustomText
                children={'Full Name'}
                globalStyle={{
                  ...FontStyle.text_h5.medium,
                  marginTop: normalize(3),
                }}
              />
              <CustomText
                children={'Position'}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                }}
              />
            </View>

            <View style={{ position: 'absolute', right: normalize(15) }}>
              <SelectIcon
                width={normalize(24)}
                height={normalize(24)}
                color={Colors.green['600']}
              />
            </View>
          </View>
          <Underline
            height={normalize(1.5)}
            style={{ marginVertical: normalize(2) }}
          />
          <CustomText
            children={'About info ................'}
            ellipsizeMode={'tail'}
            numberOfLines={3}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginTop: normalize(2),
              color: Colors.oxford_blue['200'],
            }}
          />
          <CustomText
            children={'+77 95-95-95'}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginTop: normalize(2),
            }}
          />
          <CustomText
            children={'voorhis@gmail.com'}
            globalStyle={{
              ...FontStyle.text_h6.regular,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: Colors.grey['50'],
        paddingBottom: normalize(50),
      }}>
      <FlatList
        data={[
          ...Object.keys(images.speakers),
          ...Object.keys(images.speakers),
        ]}
        renderItem={renderSpeakerItem}
        ItemSeparatorComponent={() => (
          <View style={{ height: normalize(16) }} />
        )}
        contentContainerStyle={{
          marginTop: normalize(18),
          marginHorizontal: normalize(16),
          paddingBottom: normalize(100),
        }}
      />
    </View>
  );
};

export { ChooseSpeaker };
