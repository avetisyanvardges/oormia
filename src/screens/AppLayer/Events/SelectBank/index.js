import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { back } from 'services/NavigationService';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { banksArray } from 'assets/server/server';
import FastImage from 'react-native-fast-image';
import { CustomText } from 'components/Text';
import { FlatList } from 'react-native-gesture-handler';
import dispatch from 'utils/dispatch/dispatch';
import { set_selected_bank } from 'state/events';
import { useSelector } from 'react-redux';

const SelectBankScreen = () => {
  const { selected_bank } = useSelector(({ events }) => events);
  console.log(selected_bank);
  const renderBankCard = ({ item, index }) => {
    const selected = item.name === selected_bank?.name;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          dispatch(set_selected_bank(item));
          back();
        }}
        style={{
          width: normalize(100),
          height: normalize(100),
          marginHorizontal: index % 3 === 1 ? normalize(16) : 0,
          borderRadius: normalize(12),
          backgroundColor: Colors.white,
          borderWidth: normalize(1.5),
          borderColor: selected ? Colors.purple['500'] : Colors.white,
          padding: normalize(10),
          alignItems: 'center',
          justifyContent: 'center',
          ...Shadow,
        }}>
        <FastImage
          source={{ uri: item.image }}
          style={{
            width: normalize(80),
            height: normalize(80),
          }}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    );
  };

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
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View
            style={{
              height: `${normalize(90)}%`,
              paddingTop: normalize(24),
              backgroundColor: Colors.oxford_blue['30'],
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <CustomText
                children={'Select bank'}
                globalStyle={{
                  ...FontStyle.text_h3.medium,
                  marginBottom: normalize(16),
                  marginLeft: normalize(16),
                }}
              />
              <FlatList
                data={banksArray}
                renderItem={renderBankCard}
                numColumns={3}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingBottom: normalize(40),
                }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: normalize(16) }} />
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectBankScreen;
