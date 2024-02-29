import React, { useCallback, useEffect, useState } from 'react';
import ScreenMask from 'components/screenMask';
import { FlatList, ImageBackground, Pressable, View } from 'react-native';
import { CustomText } from 'components/Text';
import { styles } from './style';
import { server as faceData } from 'assets/server/server';
import CheckBox from '@react-native-community/checkbox';
import { normalize } from 'assets/RootStyles/normalize';
import BtnGoBack from 'components/BtnGoBack';
import { Colors, fullScreen } from 'assets/RootStyles';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'components/Button';
import dispatch from 'utils/dispatch/dispatch';
import { userSignUp } from 'state/user/operations/userSignUp';
import { useSelector } from 'react-redux';
import { routNames } from 'constants/routNames';
import { fetchSubCategoriesAll } from 'state/categories/operations/fetchSubCategoriesAll';
import { isEmpty } from 'lodash';
import FastImage from 'react-native-fast-image';
import { editProfile } from 'state/user/operations/editProfile';
import { navigate } from 'services/NavigationService';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function PreferencesScreen({ navigation, route }) {
  const [data, setData] = useState(faceData);
  const { values } = route?.params;
  const insets = useSafeAreaInsets();
  const { sub_categories } = useSelector(({ categories }) => categories);
  const { currentUser } = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(fetchSubCategoriesAll());
  }, []);

  useEffect(() => {
    if (!isEmpty(sub_categories)) {
      setData(sub_categories);
    }
  }, [sub_categories]);

  const onChecked = item => {
    setData(prevState =>
      prevState.map(el => {
        if (item.id === el.id) {
          return { ...el, checked: !el.checked };
        } else {
          return el;
        }
      }),
    );
  };

  const onSubmit = () => {
    const body = new FormData();

    const mutationPref = data.reduce((acc, item) => {
      if (item.checked) {
        acc.push(item.id);
      }

      return acc;
    }, []);
    const mutatedBody = {
      ...values,
      subcategoryId: mutationPref,
    };

    body.append('request', {
      string: JSON.stringify(mutatedBody),
      type: 'application/json',
    });

    dispatch(
      editProfile({
        body,
        id: currentUser?.id,
        callback: () => {
          navigate(routNames.APP_LAYER);
        },
      }),
    );
  };

  const skipAndSubmit = () => {
    const body = new FormData();

    const mutatedBody = {
      ...values,
      preferences: [],
    };

    body.append('request', {
      string: JSON.stringify(mutatedBody),
      type: 'application/json',
    });

    dispatch(
      editProfile({
        body,
        id: currentUser?.id,
        callback: () => {
          navigate(routNames.APP_LAYER);
        },
      }),
    );
  };

  const renderPreferencesItem = useCallback(({ item, index }) => {
    const selected = item?.checked;
    return (
      <Pressable
        onPress={() => onChecked(item)}
        style={{ marginHorizontal: normalize(10) }}>
        <FastImage
          source={{ uri: item?.picture?.fileDownloadUri }}
          resizeMode="cover"
          style={{
            width: (fullScreen.width - normalize(52)) / 2,
            height: normalize(170),
            borderRadius: normalize(10),
            overflow: 'hidden',
          }}>
          <View style={{ alignItems: 'flex-end', padding: normalize(10) }}>
            <CheckBox
              disabled={true}
              value={selected}
              onValueChange={() => onChecked(item)}
              tintColor={Colors.white}
              onFillColor={Colors.purple['500']}
              onTintColor={Colors.purple['500']}
              onCheckColor={Colors.white}
              onAnimationType={'one-stroke'}
              offAnimationType={'one-stroke'}
              style={{ borderRadius: normalize(5) }}
            />
          </View>
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
            <CustomText
              children={item.name}
              globalStyle={{ color: Colors.white, padding: normalize(10) }}
            />
          </LinearGradient>
        </FastImage>
      </Pressable>
    );
  }, []);

  return (
    <ScreenMask style={styles.screenMask}>
      <View style={[styles.nextContainer, { paddingTop: insets.top }]}>
        <BtnGoBack />
        <CustomText
          globalStyle={styles.title}
          children={'user_information.hi'}
          values={{ name: values?.firstName }}
        />
        <CustomText children={'btn.skip'} onPress={() => skipAndSubmit()} />
      </View>
      <View style={styles.container}>
        <CustomText
          values={'Choose your\nfavorite categories'}
          globalStyle={{ ...styles.title, textAlign: 'center' }}
        />

        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderPreferencesItem}
          ItemSeparatorComponent={() => (
            <View style={{ height: normalize(10) }} />
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
          title="save"
          textStyle={styles.buttonTextStyle}
          onPress={onSubmit}
          // disabled={!(isValid && dirty && img)}
        />
      </View>
    </ScreenMask>
  );
}

export default PreferencesScreen;
