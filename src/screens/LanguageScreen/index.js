import React, { useCallback } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import Icon from 'components/Svgs';
import { back } from 'services/NavigationService';
import { LOCALES } from 'constants/locales';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deviceInfo } from 'assets/deviceInfo';
import { CustomText } from 'components/Text';
import i18n from 'i18next';

const LanguageScreen = () => {
  const handleSelect = async lang => {
    await AsyncStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    console.log(lang);
    back();
  };

  const renderPickerData = useCallback(({ item }) => {
    const selected = item === i18n.language;

    console.log(item);

    return (
      <View
        style={{
          justifyContent: 'center',
          padding: normalize(12),
          overflow: 'hidden',
          backgroundColor: Colors.white,
          paddingVertical: normalize(8),
          paddingHorizontal: normalize(8),
          borderRadius: normalize(12),
          marginBottom: normalize(16),
        }}>
        <TouchableOpacity
          onPress={() => handleSelect(item)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name={item} size={normalize(34)} />
          <View style={{ flex: 1, marginLeft: normalize(16) }}>
            <CustomText
              children={`locales.${item}`}
              ellipsizeMode={'tail'}
              numberOfLines={1}
              globalStyle={{
                ...FontStyle.text_h5.regular,
              }}
            />
          </View>
        </TouchableOpacity>
        {/*{selected && (*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      position: 'absolute',*/}
        {/*      left: normalize(30),*/}
        {/*      bottom: normalize(9),*/}
        {/*      width: normalize(16),*/}
        {/*      height: normalize(16),*/}
        {/*      borderRadius: normalize(8),*/}
        {/*      alignItems: 'center',*/}
        {/*      justifyContent: 'center',*/}
        {/*      backgroundColor: Colors.white,*/}
        {/*    }}>*/}
        {/*    <Icon name={ICON_NAMES.CHECKBOX.ON} size={normalize(16)} />*/}
        {/*  </View>*/}
        {/*)}*/}
      </View>
    );
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => back()}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: deviceInfo.small_screen
                ? `${Object.keys(LOCALES).length * 10 + 20}%`
                : `${Object.keys(LOCALES).length * 10 + 10}%`,
              paddingHorizontal: normalize(16),
              backgroundColor: Colors.oxford_blue['30'],

              paddingTop: normalize(24),
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <CustomText
                children={'locales.select_language'}
                globalStyle={{
                  ...FontStyle.text_h3.medium,
                  marginBottom: normalize(12),
                }}
              />

              <FlatList
                data={Object.values(LOCALES)}
                keyExtractor={item => item}
                renderItem={renderPickerData}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LanguageScreen;
