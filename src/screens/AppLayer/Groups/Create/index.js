import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Styles } from './style';
import { back, navigate } from 'services/NavigationService';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import { normalize } from 'assets/RootStyles/normalize';
import ImagePicker from 'screens/AppLayer/Create/components/ImagePicker';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useSelector } from 'react-redux';
import dispatch from 'utils/dispatch/dispatch';
import { fetchCategoriesAll } from 'state/categories/operations/fetchCategoriesAll';
import Button from 'components/Button';
import Input from 'components/Input';
import Description from 'components/Description';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { routNames } from 'constants/routNames';
import { createGroupAction } from 'state/groups/operations/addGroup';
import { isEmpty } from 'lodash';

function CreateGroup(props) {
  const insets = useSafeAreaInsets();
  const styles = Styles();
  const bottomSheetRef = useRef(null);
  const [response, setResponse] = useState(null);
  const { categories } = useSelector(({ categories }) => categories);
  const { users } = useSelector(({ user }) => user);
  const { invited_members } = useSelector(({ groups }) => groups);
  const [showCategories, setShowCategories] = useState(false);
  const [schedule, setSchedule] = useState(1);
  const { setValue, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      groupName: '',
      userId: [],
      preferences: ['sport'],
    },
  });

  const pictures = useWatch({
    control,
    name: 'pictures',
    defaultValue: false,
  });

  useEffect(() => {
    const [photo] = response?.assets || [];
    if (photo?.uri) {
      bottomSheetRef.current.close();
      setValue('image', photo?.uri);
      setValue('pictures', {
        name: photo?.fileName,
        uri: photo?.uri,
        type: photo?.type,
      });
    }
  }, [response]);

  useEffect(() => {
    dispatch(fetchCategoriesAll());
  }, []);

  const onSubmit = values => {
    const data = new FormData();
    const body = {
      groupName: values.name,
      userId: invited_members,
      preferences: ['sport'],
    };

    console.log(values);
    data.append('groupRequest', {
      string: JSON.stringify(body),
      type: 'application/json',
    });

    if (!isEmpty(pictures)) {
      if (!isEmpty(pictures[0])) {
        data.append('file', {
          name: pictures?.[0]?.fileName,
          uri: pictures?.[0]?.fileDownloadUri,
          type: 'image/jpeg',
        });
      } else {
        let mutatedName;

        if (!pictures.fileName) {
          const [fileName] = pictures.uri.split('/').reverse();
          mutatedName = fileName;
        } else {
          mutatedName = pictures.fileName;
        }

        data.append('file', {
          name: mutatedName,
          uri: pictures.uri,
          type: 'image/jpeg',
        });
      }
    }

    dispatch(createGroupAction({ body: data }));
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity activeOpacity={1} style={styles.f_container}>
      <View>
        <Image
          source={{ uri: item?.picture?.fileDownloadUri }}
          style={styles.f_img}
        />
      </View>
      <View style={{ marginLeft: normalize(5) }}>
        <View style={styles.f_title_container}>
          <CustomText
            children={item.name}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginTop: normalize(2),
            }}
          />
        </View>
        <View style={styles.f_add}>
          <CustomText
            children={'Add'}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              color: Colors.grey['200'],
            }}
          />
          <View style={styles.f_add_button}>
            <Image
              source={require('../../../../assets/images/plus.png')}
              style={styles.f_add_icon}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  function renderHeaderComponent() {
    return (
      <>
        <View style={styles.img_container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.img_bg}>
              <Controller
                name={'image'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => {
                  return (
                    <Image
                      source={
                        value
                          ? { uri: value }
                          : require('../../../../assets/images/profile_bg.jpeg')
                      }
                      style={styles.img}
                    />
                  );
                }}
              />
            </View>
            <View
              style={{
                marginLeft: normalize(15),
              }}>
              <TouchableOpacity
                style={styles.upload_container}
                onPress={() => {
                  bottomSheetRef.current.show();
                }}>
                <View style={styles.upload_bg}>
                  <Image
                    source={require('../../../../assets/images/upload.png')}
                    style={styles.logo}
                  />
                </View>
                <CustomText
                  children={'upload_an_image'}
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                    marginLeft: normalize(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: normalize(100),
          }}>
          <Controller
            name={'name'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                placeholder={'group_name'}
                label={'group_name'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            name={'description'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Description
                placeholder={'group_description'}
                label={'group_description'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                multiline
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: normalize(20),
          }}>
          <View>
            <CustomText
              children={'members'}
              globalStyle={{ ...FontStyle.text_h4.medium }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {invited_members.slice(0, 4).map((item, index) => {
                const selected_user = users.find(user => user.id === item);
                return (
                  <View
                    style={{
                      left: -normalize(index * 30),
                      width: normalize(50),
                      height: normalize(50),
                      borderRadius: normalize(25),
                      backgroundColor: Colors.purple['600'],
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...Shadow,
                    }}>
                    <CustomText
                      children={selected_user?.firstName
                        .split('')?.[0]
                        ?.toUpperCase()}
                      globalStyle={{
                        ...FontStyle.text_h2.semi_bold,
                        color: Colors.white,
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </View>
          <Button
            containerStyle={{
              flex: 0.5,
              paddingVertical: normalize(6),
            }}
            title={'invite'}
            textStyle={{
              ...FontStyle.text_h5.medium,
              color: Colors.white,
            }}
            onPress={() => {
              navigate(routNames.INVITE_MEMBERS);
            }}
          />
        </View>
        <View
          style={{
            marginTop: normalize(16),
          }}>
          <CustomText
            children={'event_frequency'}
            globalStyle={{ ...FontStyle.text_h4.medium }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: normalize(8),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(12),
                backgroundColor: Colors.purple['500'],
                borderRadius: normalize(16),
              }}>
              <CustomText
                children={'on_weekends'}
                globalStyle={{
                  ...FontStyle.text_h6.regular,
                  color: Colors.white,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(12),
                backgroundColor: Colors.oxford_blue['30'],
                borderRadius: normalize(16),
                marginLeft: normalize(8),
                opacity: 0.6,
              }}>
              <CustomText
                children={'monthly'}
                globalStyle={{
                  ...FontStyle.text_h6.regular,
                  color: Colors.purple['500'],
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(12),
                backgroundColor: Colors.oxford_blue['30'],
                borderRadius: normalize(16),
                marginLeft: normalize(8),
                opacity: 0.6,
              }}>
              <CustomText
                children={'yearly'}
                globalStyle={{
                  ...FontStyle.text_h6.regular,
                  color: Colors.purple['500'],
                }}
              />
            </View>
          </View>
        </View>
        {/*DISCUSSION FOR PUBLIC EVENTS, FOR EXAMPLE CHANEL FOR WINE MAKERS*/}
        {/*<View style={{ marginTop: normalize(20) }}>*/}
        {/*  <CustomText*/}
        {/*    children={'Group type'}*/}
        {/*    globalStyle={{ ...FontStyle.text_h4.medium }}*/}
        {/*  />*/}
        {/*  <Controller*/}
        {/*    name={'eventType'}*/}
        {/*    control={control}*/}
        {/*    render={({ field: { value, onChange, onBlur } }) => (*/}
        {/*      <View style={styles.type_container}>*/}
        {/*        <View style={styles.type}>*/}
        {/*          <TouchableOpacity*/}
        {/*            activeOpacity={0.8}*/}
        {/*            onPress={() => onChange('OPEN')}*/}
        {/*            style={[*/}
        {/*              styles.type_press,*/}
        {/*              value === 'OPEN'*/}
        {/*                ? {*/}
        {/*                    backgroundColor: Colors.purple['500'],*/}
        {/*                    ...Shadow,*/}
        {/*                  }*/}
        {/*                : null,*/}
        {/*            ]}>*/}
        {/*            <Icon*/}
        {/*              name={ICON_NAMES.UNLOCK}*/}
        {/*              size={normalize(20)}*/}
        {/*              color={*/}
        {/*                value === 'OPEN'*/}
        {/*                  ? Colors.white*/}
        {/*                  : Colors.grey['400']*/}
        {/*              }*/}
        {/*            />*/}
        {/*          </TouchableOpacity>*/}
        {/*          <Underline*/}
        {/*            color={Colors.oxford_blue['100']}*/}
        {/*            style={{ marginVertical: normalize(7) }}*/}
        {/*          />*/}
        {/*          <TouchableOpacity*/}
        {/*            activeOpacity={0.8}*/}
        {/*            onPress={() => onChange('CLOSE')}*/}
        {/*            style={[*/}
        {/*              styles.type_press,*/}
        {/*              value === 'CLOSE'*/}
        {/*                ? {*/}
        {/*                    backgroundColor: Colors.purple['500'],*/}
        {/*                    ...Shadow,*/}
        {/*                  }*/}
        {/*                : null,*/}
        {/*            ]}>*/}
        {/*            <Icon*/}
        {/*              name={ICON_NAMES.LOCK}*/}
        {/*              size={normalize(20)}*/}
        {/*              color={*/}
        {/*                value === 'CLOSE'*/}
        {/*                  ? Colors.white*/}
        {/*                  : Colors.grey['400']*/}
        {/*              }*/}
        {/*            />*/}
        {/*          </TouchableOpacity>*/}
        {/*        </View>*/}
        {/*        <View*/}
        {/*          style={{*/}
        {/*            flex: 1,*/}
        {/*            paddingHorizontal: normalize(10),*/}
        {/*          }}>*/}
        {/*          <TouchableOpacity*/}
        {/*            activeOpacity={0.8}*/}
        {/*            onPress={() => onChange('OPEN')}>*/}
        {/*            <CustomText*/}
        {/*              children={'Public'}*/}
        {/*              globalStyle={{*/}
        {/*                color:*/}
        {/*                  value === 'OPEN'*/}
        {/*                    ? Colors.purple['500']*/}
        {/*                    : Colors.oxford_blue['100'],*/}
        {/*              }}*/}
        {/*            />*/}
        {/*            <CustomText*/}
        {/*              children={'This is public event'}*/}
        {/*              globalStyle={{*/}
        {/*                ...FontStyle.text_h6.regular,*/}
        {/*                color:*/}
        {/*                  value === 'OPEN'*/}
        {/*                    ? Colors.oxford_blue['200']*/}
        {/*                    : Colors.oxford_blue['100'],*/}
        {/*              }}*/}
        {/*            />*/}
        {/*          </TouchableOpacity>*/}
        {/*          <Underline*/}
        {/*            color={Colors.oxford_blue['50']}*/}
        {/*            style={{ marginVertical: normalize(7) }}*/}
        {/*          />*/}
        {/*          <TouchableOpacity*/}
        {/*            activeOpacity={0.8}*/}
        {/*            onPress={() => onChange('CLOSE')}>*/}
        {/*            <CustomText*/}
        {/*              children={'Private'}*/}
        {/*              globalStyle={{*/}
        {/*                color:*/}
        {/*                  value === 'CLOSE'*/}
        {/*                    ? Colors.purple['500']*/}
        {/*                    : Colors.oxford_blue['100'],*/}
        {/*              }}*/}
        {/*            />*/}
        {/*            <CustomText*/}
        {/*              children={'This is private event'}*/}
        {/*              globalStyle={{*/}
        {/*                ...FontStyle.text_h6.regular,*/}
        {/*                color:*/}
        {/*                  value === 'CLOSE'*/}
        {/*                    ? Colors.oxford_blue['200']*/}
        {/*                    : Colors.oxford_blue['100'],*/}
        {/*              }}*/}
        {/*            />*/}
        {/*          </TouchableOpacity>*/}
        {/*        </View>*/}
        {/*      </View>*/}
        {/*    )}*/}
        {/*  />*/}
        {/*</View>*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(16),
          }}>
          <View>
            <CustomText
              children={'categories'}
              globalStyle={{ ...FontStyle.text_h4.medium }}
            />
            <CustomText
              children={'choose_up_to_3_categories'}
              globalStyle={{
                ...FontStyle.text_h6.medium,
                color: Colors.grey['200'],
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.show_categories}
            onPress={() => setShowCategories(!showCategories)}>
            <Image
              source={
                showCategories
                  ? require('../../../../assets/images/minus.png')
                  : require('../../../../assets/images/plus.png')
              }
              style={{
                width: normalize(20),
                height: normalize(20),
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.content}>
            <CustomText
              children={'create_new_group'}
              globalStyle={{ ...FontStyle.text_h2.medium }}
            />

            <FlatList
              data={showCategories ? categories : []}
              ListHeaderComponent={renderHeaderComponent()}
              numColumns={2}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: insets.bottom ? insets.bottom : normalize(10),
              }}>
              <Button
                title={'Cancel'}
                textStyle={{ color: Colors.purple['500'] }}
                containerStyle={{
                  width: '40%',
                  backgroundColor: Colors.grey['50'],
                }}
                onPress={() => back()}
              />
              <Button
                title={'Create group'}
                textStyle={{ color: Colors.white }}
                containerStyle={{
                  marginLeft: normalize(10),
                  width: '55%',
                }}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <BottomSheet
          hasDraggableIcon
          ref={bottomSheetRef}
          height={normalize(150)}>
          <View
            style={{
              justifyContent: 'center',
              padding: 20,
            }}>
            <ImagePicker setResponse={setResponse} />
          </View>
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CreateGroup;
