import React, {useRef} from 'react';
import {Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {normalize} from 'assets/RootStyles/normalize';

const PlaceAutoComplete = ({region, close}) => {
  const ref = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useSelector(store => store?.themes.theme);
  const buttonColor = useSelector(store => store?.themes.buttonColor);
  const {PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR} = theme;
  const {PRIMARY_BUTTON_COLOR} = buttonColor;

  return (
    <View
      style={{
        flex: 1,
        height: normalize(50),
        marginHorizontal: normalize(10),
      }}>
      <Pressable
        onPress={() => navigation.navigate('SelectByMap')}
        style={{
          paddingVertical: normalize(10),
          marginVertical: normalize(20),
          borderBottomWidth: 1,
        }}>
        {/*<CustomText*/}
        {/*  children={i18n.t('client.pages.map.selectByMap')}*/}
        {/*  globalStyle={{*/}
        {/*    color: PRIMARY_TEXT_COLOR,*/}
        {/*    fontSize: normalize(16),*/}
        {/*    marginLeft: normalize(10),*/}
        {/*  }}*/}
        {/*/>*/}
      </Pressable>
    </View>
  );
};

export default PlaceAutoComplete;
