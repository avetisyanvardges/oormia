import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import Header from 'components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import Input from 'components/Input';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Button from 'components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import { useSelector } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import dispatch from 'utils/dispatch/dispatch';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ImagePicker from 'screens/AppLayer/Create/components/ImagePicker';
import { addEvent } from 'state/events/operations/addEvent';
import Underline from 'components/Underline';
import { CustomText } from 'components/Text';
import CustomSwitch from 'components/CustomSwitch';
import DropDown from 'components/DropDown';
import { isEmpty } from 'lodash';

const Create = ({ categories, setScreen, region }) => {
  const bottomSheetRef = useRef(null);
  const { type, data } = useSelector(({ modal }) => modal);
  const [openDate, setOpenDate] = useState(false);
  const [response, setResponse] = useState(null);
  const insets = useSafeAreaInsets();
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      ticket: false,
      date: new Date(),
      preferences: [],
      name: '',
      description: '',
      address: '',
      startDate: moment().toDate(),
      duration: '2',
      eventType: 'OPEN',
      participantCount: 0,
      startAge: 0,
      endAge: 0,
      price: 0,
    },
  });
  const ticket = useWatch({
    control,
    name: 'ticket',
    defaultValue: false,
  });
  const priceOpacity = useRef(new Animated.Value(0)).current;
  const priceOpacityInterpolate = priceOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const onSubmit = data => {
    const mutationData = {
      ...data,
    };
    console.log(data, 88);
    // dispatch(showModal({type: 'create_ticket'}));
    dispatch(addEvent({ body: mutationData }));
  };

  useEffect(() => {
    if (!isEmpty(categories)) {
      const pref = [categories];
      setValue('preferences', pref);
    }
  }, [categories]);

  useEffect(() => {
    // console.log(type, data);
  }, [type, data]);

  useEffect(() => {
    if (response?.assets?.[0]?.uri) {
      setValue('image', response?.assets?.[0]?.uri);
    }
  }, [response]);

  useEffect(() => {
    if (region?.address) {
      console.log(region?.address, 999);
      setValue('location', region?.address);
      setValue('region', region);
    }
  }, [region]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'ticket') {
        if (value.ticket) {
          Animated.timing(priceOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(priceOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <ScrollView bounces={false}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Controller
              name={'photos'}
              control={control}
              render={() => {
                return (
                  <ImageBackground
                    source={{
                      uri:
                        getValues('image') ||
                        categories?.picture?.fileDownloadUri,
                    }}
                    style={{
                      height: insets.top
                        ? normalize(184) + insets.top
                        : normalize(200),
                    }}>
                    <View
                      style={{
                        flex: 1,
                        paddingTop: insets.top ? insets.top : normalize(16),
                        backgroundColor: 'rgba(10, 37, 64, .6)',
                      }}>
                      <View
                        style={{
                          paddingHorizontal: normalize(16),
                        }}>
                        <Header
                          backIconColor={Colors.white}
                          backIconContainer={{
                            padding: normalize(7),
                            // backgroundColor: 'rgba(10, 37, 64, .8)',
                            borderRadius: normalize(12),
                          }}
                          backPress={() => setScreen('choose_category')}
                        />
                        <TouchableOpacity
                          onPress={() => {
                            bottomSheetRef.current.show();
                          }}
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Icon
                            name={ICON_NAMES.GALLERY_ADD}
                            color={Colors.white}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                );
              }}
            />

            <View style={{ paddingHorizontal: normalize(16) }}>
              <Controller
                name={'name'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    label={'Name'}
                    placeholder={'Name'}
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
                  <Input
                    label={'Details'}
                    placeholder={'Details'}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    // multiline
                  />
                )}
              />
              <Controller
                name={'location'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    label={'Location'}
                    placeholder={'Location'}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onPress={() =>
                      navigate(routNames.CHOOSE_LOCATION, {
                        address: getValues('region'),
                      })
                    }
                    editable={false}
                    multiline={false}
                    ellipsizeMode={'clip'}
                    numberOfLines={1}
                    renderRightIcon={() => (
                      <Icon
                        name={ICON_NAMES.LOCATION}
                        color={Colors.oxford_blue['200']}
                      />
                    )}
                  />
                )}
              />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: normalize(16) }}>
                  <Controller
                    name={'date'}
                    control={control}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        label={'Date'}
                        placeholder={'Date'}
                        value={moment(value).format('DD MMMM, HH:mm')}
                        onChange={onChange}
                        onBlur={onBlur}
                        onPress={() => setOpenDate(true)}
                        editable={false}
                        renderRightIcon={() => (
                          <Icon
                            name={ICON_NAMES.CALENDAR}
                            color={Colors.oxford_blue['200']}
                          />
                        )}
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 0.6 }}>
                  <Controller
                    name={'duration'}
                    control={control}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        label={'Duration'}
                        placeholder={'Duration'}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        renderRightIcon={() => (
                          <Icon
                            name={ICON_NAMES.DURATION}
                            color={Colors.oxford_blue['200']}
                          />
                        )}
                      />
                    )}
                  />
                </View>
              </View>
              <Controller
                name={'ticket'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: normalize(10),
                      }}>
                      <View>
                        <CustomText
                          children={'Tickets'}
                          globalStyle={{ ...FontStyle.text_h5.semi_bold }}
                        />
                        <CustomText
                          children={'You can set up price for this event'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: Colors.oxford_blue['100'],
                          }}
                        />
                      </View>
                      <CustomSwitch
                        activeColor={Colors.oxford_blue['500']}
                        inActiveColor={Colors.oxford_blue['30']}
                        active={value}
                        setActive={onChange}
                      />
                    </View>
                  </View>
                )}
              />
              <Animated.View
                style={{
                  opacity: priceOpacityInterpolate,
                }}>
                {ticket ? (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ flex: 1 }}>
                      <Controller
                        name={'price'}
                        control={control}
                        render={({ field: { value, onChange, onBlur } }) => (
                          <Input
                            label={'Price'}
                            placeholder={'0'}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                          />
                        )}
                      />
                    </View>
                  </View>
                ) : null}
              </Animated.View>
              <View style={{ marginTop: normalize(10) }}>
                <Text
                  style={{
                    color: Colors.grey['300'],
                  }}>
                  Event Type
                </Text>
                <Controller
                  name={'eventType'}
                  control={control}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: Colors.oxford_blue['30'],
                        borderRadius: normalize(12),
                        marginBottom: normalize(10),
                        marginTop: normalize(3),
                      }}>
                      <View
                        style={{
                          padding: normalize(8),
                          backgroundColor: Colors.oxford_blue['50'],
                          borderRadius: normalize(8),
                        }}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => onChange('OPEN')}
                          style={[
                            {
                              padding: normalize(7),
                              borderRadius: normalize(8),
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            value === 'OPEN'
                              ? {
                                  backgroundColor: Colors.oxford_blue['500'],
                                  ...Shadow,
                                }
                              : null,
                          ]}>
                          <Icon
                            name={ICON_NAMES.UNLOCK}
                            size={normalize(20)}
                            color={
                              value === 'OPEN'
                                ? Colors.white
                                : Colors.grey['400']
                            }
                          />
                        </TouchableOpacity>
                        <Underline
                          color={Colors.oxford_blue['100']}
                          style={{ marginVertical: normalize(7) }}
                        />
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => onChange('CLOSE')}
                          style={[
                            {
                              padding: normalize(7),
                              borderRadius: normalize(8),
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            value === 'CLOSE'
                              ? {
                                  backgroundColor: Colors.oxford_blue['500'],
                                  ...Shadow,
                                }
                              : null,
                          ]}>
                          <Icon
                            name={ICON_NAMES.LOCK}
                            size={normalize(20)}
                            color={
                              value === 'CLOSE'
                                ? Colors.white
                                : Colors.grey['400']
                            }
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{ flex: 1, paddingHorizontal: normalize(10) }}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => onChange('OPEN')}>
                          <CustomText
                            children={'Public'}
                            globalStyle={{
                              color:
                                value === 'OPEN'
                                  ? Colors.oxford_blue['500']
                                  : Colors.oxford_blue['100'],
                            }}
                          />
                          <CustomText
                            children={'This is public event'}
                            globalStyle={{
                              ...FontStyle.text_h6.regular,
                              color:
                                value === 'OPEN'
                                  ? Colors.oxford_blue['200']
                                  : Colors.oxford_blue['100'],
                            }}
                          />
                        </TouchableOpacity>
                        <Underline
                          color={Colors.oxford_blue['50']}
                          style={{ marginVertical: normalize(7) }}
                        />
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => onChange('CLOSE')}>
                          <CustomText
                            children={'Private'}
                            globalStyle={{
                              color:
                                value === 'CLOSE'
                                  ? Colors.oxford_blue['500']
                                  : Colors.oxford_blue['100'],
                            }}
                          />
                          <CustomText
                            children={'This is private event'}
                            globalStyle={{
                              ...FontStyle.text_h6.regular,
                              color:
                                value === 'CLOSE'
                                  ? Colors.oxford_blue['200']
                                  : Colors.oxford_blue['100'],
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>

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

            <DatePicker
              modal
              open={openDate}
              mode={'datetime'}
              date={getValues('date')}
              minimumDate={new Date()}
              onConfirm={date => {
                setOpenDate(false);
                setValue('date', date);
                setValue('start_time', date);
                // onChange(date);
              }}
              onCancel={() => {
                setOpenDate(false);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          marginBottom: insets.bottom + normalize(8),
        }}>
        <Button
          title={'Create event'}
          textStyle={{ color: Colors.white }}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default Create;
