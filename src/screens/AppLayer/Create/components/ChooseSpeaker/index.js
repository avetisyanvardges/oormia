import React from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';
import images from 'assets/images';
import {Colors, FontStyle} from 'assets/RootStyles';
import {CustomText} from 'components/Text';
import Underline from 'components/Underline';

const ChooseSpeaker = ({categories, setCategories, setScreen}) => {
  const renderSpeakerItem = ({item}) => {
    return (
      <Pressable onPress={() => {}} style={{flexDirection: 'row'}}>
        <Image
          source={images.speakers[item]}
          resizeMode="cover"
          style={{
            width: normalize(102),
            height: normalize(130),
            borderRadius: normalize(10),
            overflow: 'hidden',
          }}
        />
        <View style={{flex: 1, marginLeft: normalize(8)}}>
          <CustomText
            children={'Full Name'}
            globalStyle={{...FontStyle.text_h5.medium}}
          />
          <CustomText
            children={'Position'}
            globalStyle={{
              ...FontStyle.text_h5.regular,
              marginTop: normalize(2),
            }}
          />
          <Underline
            height={normalize(1.5)}
            style={{marginVertical: normalize(5)}}
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
              marginTop: normalize(2),
            }}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={[
          ...Object.keys(images.speakers),
          ...Object.keys(images.speakers),
        ]}
        renderItem={renderSpeakerItem}
        ItemSeparatorComponent={() => <View style={{height: normalize(16)}} />}
        contentContainerStyle={{
          marginTop: normalize(18),
          marginHorizontal: normalize(16),
          paddingBottom: normalize(100),
        }}
      />
    </View>
  );
};

export {ChooseSpeaker};
