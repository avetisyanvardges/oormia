import React, {useCallback, useEffect, useState} from 'react';
import ScreenMask from 'components/screenMask';
import {FlatList, ImageBackground, Pressable, View} from 'react-native';
import {CustomText} from 'components/Text';
import {styles} from './style';
import {server as faceData} from 'assets/server/server';
import CheckBox from '@react-native-community/checkbox';
import {normalize} from 'assets/RootStyles/normalize';
import BtnGoBack from 'components/BtnGoBack';
import {Colors, fullScreen} from 'assets/RootStyles';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'components/Button';
import dispatch from 'utils/dispatch/dispatch';
import {userSignUp} from 'state/user/operations/userSignUp';
import {fetchCategoriesAll} from 'state/categories/operations/fetchCategoriesAll';

function PreferencesScreen({navigation, route}) {
  const [data, setData] = useState(faceData);
  const {values} = route?.params;

  useEffect(() => {
    dispatch(fetchCategoriesAll());
  }, []);

  const onChecked = item => {
    setData(prevState =>
      prevState.map(el => {
        if (item.id === el.id) {
          return {...el, checked: !el.checked};
        } else {
          return el;
        }
      }),
    );
  };

  const onSubmit = () => {
    const body = {
      ...values,
      preferences: data.filter(pref => pref.checked),
    };

    dispatch(userSignUp(body));
  };

  const renderPreferencesItem = useCallback(({item, index}) => {
    const selected = item?.checked;
    return (
      <Pressable
        onPress={() => onChecked(item)}
        style={{marginHorizontal: normalize(10)}}>
        <ImageBackground
          source={{uri: item?.img}}
          resizeMode="cover"
          style={{
            width: (fullScreen.width - normalize(52)) / 2,
            height: normalize(170),
            borderRadius: normalize(10),
            overflow: 'hidden',
          }}>
          <View style={{alignItems: 'flex-end', padding: normalize(10)}}>
            <CheckBox
              disabled={true}
              value={selected}
              onValueChange={() => onChecked(item)}
              tintColor={Colors.white}
              onFillColor={Colors.oxford_blue['500']}
              onTintColor={Colors.oxford_blue['500']}
              onCheckColor={Colors.white}
              onAnimationType={'one-stroke'}
              offAnimationType={'one-stroke'}
              style={{borderRadius: normalize(5)}}
            />
          </View>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.5, 0.95]}
            colors={['rgba(0,0,0,.0)', Colors.grey['500']]}
            style={{
              flex: 1,
              height: normalize(70),
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <CustomText
              children={item.title}
              globalStyle={{color: Colors.white, padding: normalize(10)}}
            />
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    );
  }, []);

  return (
    <ScreenMask style={styles.screenMask}>
      <View style={styles.nextContainer}>
        <BtnGoBack />
        <CustomText
          globalStyle={styles.title}
          children={`Hi ${values?.firstName}!`}
        />
        <CustomText children={'Skip'} />
      </View>
      <View style={styles.container}>
        <CustomText
          values={'Choose your\nfavorite categories'}
          globalStyle={{...styles.title, textAlign: 'center'}}
        />

        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderPreferencesItem}
          ItemSeparatorComponent={() => (
            <View style={{height: normalize(10)}} />
          )}
          // contentContainerStyle={{paddingBottom: normalize(40)}}
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingTop: normalize(10),
        }}>
        <Button
          containerStyle={{paddingVertical: normalize(6)}}
          title="Save"
          textStyle={styles.buttonTextStyle}
          onPress={onSubmit}
          // disabled={!(isValid && dirty && img)}
        />
      </View>
    </ScreenMask>
  );
}

export default PreferencesScreen;
