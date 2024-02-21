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
import { back, navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import ImagePicker from 'screens/AppLayer/Create/components/ImagePicker';
import { addEvent } from 'state/events/operations/addEvent';
import Underline from 'components/Underline';
import { CustomText } from 'components/Text';
import CustomSwitch from 'components/CustomSwitch';
import { isEmpty } from 'lodash';
import { updateEvent } from 'state/events/operations/updateEvent';
import { useNavigation } from '@react-navigation/native';

const Create = ({
  categories,
  setScreen,
  region,
  setCategories,
  screen,
  params,
}) => {
  const bottomSheetRef = useRef(null);
  const { type, data } = useSelector(({ modal }) => modal);
  const update = screen === 'update';
  const { selected_event } = useSelector(({ events }) => events);
  const [openDate, setOpenDate] = useState(false);
  const [response, setResponse] = useState(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const { control, handleSubmit, watch, setValue, getValues, reset } = useForm({
    defaultValues: {
      data: {
        ticket: false,
        preferences: [],
        name: '',
        date: new Date(),
        description: '',
        address: '',
        startDate: moment().toDate(),
        duration: '2',
        eventType: 'OPEN',
        participantCount: 0,
        startAge: 0,
        endAge: 0,
        price: 0,
        currency: 'Դ',
      },
      pictures: [],
    },
  });

  useEffect(() => {
    if (update && !isEmpty(selected_event)) {
      setValue('data', {
        ...selected_event,
        ticket: !!selected_event.price,
        preferences: selected_event?.preferences,
        startDate: selected_event?.startDate,
        duration: `${selected_event?.duration}`,
        price: `${selected_event?.price}`,
        eventType: selected_event?.eventType,
        participantCount: selected_event?.participantCount,
        location: selected_event.address,
        region: {
          latitude: selected_event?.lat,
          longitude: selected_event?.lon,
        },
      });
      setValue('pictures', selected_event.pictures);
      setValue('image', selected_event.pictures);
    }
  }, [update, screen, selected_event]);

  const ticket = useWatch({
    control,
    name: 'data.ticket',
    defaultValue: false,
  });

  const date = useWatch({
    control,
    name: 'data.date',
    defaultValue: false,
  });
  const priceOpacity = useRef(new Animated.Value(0)).current;
  const priceOpacityInterpolate = priceOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const onSubmit = ({ data, pictures }) => {
    const body = new FormData();

    body.append('eventRequest', {
      string: JSON.stringify(data),
      type: 'application/json',
    });

    if (!isEmpty(pictures)) {
      if (!isEmpty(pictures[0])) {
        body.append('file', {
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

        body.append('file', {
          name: mutatedName,
          uri: pictures.uri,
          type: 'image/jpeg',
        });
      }
    }

    if (update) {
      dispatch(
        updateEvent({
          body: body,
          id: params?.id,
          callback: () => {
            setCategories('');
            setScreen('choose_category');
            reset({
              data: {
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
                currency: 'Դ',
              },
              pictures: [],
            });
          },
        }),
      );
    } else {
      dispatch(
        addEvent({
          body: body,
          callback: () => {
            setCategories('');
            setScreen('choose_category');
            reset({
              data: {
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
                currency: 'Դ',
              },
              pictures: [],
            });
          },
        }),
      );
    }
  };

  useEffect(() => {
    if (!isEmpty(categories)) {
      const pref = [categories];
      console.log(pref, 'PREF');
      setValue('data.preferences', pref);
    }
  }, [categories]);

  useEffect(() => {
    return () => {
      setScreen('choose_category');
      reset({});
    };
  }, [navigation]);

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
    if (region?.address) {
      setValue('data.address', region?.address);
      setValue('data.location', region?.address);
      setValue('data.lat', region?.latitude);
      setValue('data.lon', region?.longitude);
      setValue('data.region', region);
    }
  }, [region]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(name);
      if (name === 'data.ticket') {
        console.log(value);
        if (value.data.ticket) {
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
              name={'image'}
              control={control}
              render={({ field: { value, onChange, onBlur } }) => {
                return (
                  <ImageBackground
                    source={{
                      uri:
                        value?.[0]?.fileDownloadUri ||
                        value ||
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
                        <TouchableOpacity
                          onPress={() =>
                            update ? back() : setScreen('choose_category')
                          }
                          style={{
                            width: normalize(30),
                            height: normalize(30),
                            borderRadius: normalize(20),
                            backgroundColor: Colors.white,
                            marginTop: normalize(7),
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...Shadow,
                          }}>
                          <Icon
                            name={ICON_NAMES.ARROW.LEFT}
                            size={normalize(20)}
                          />
                        </TouchableOpacity>
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
                name={'data.name'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    label={'name'}
                    placeholder={'name'}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
              <Controller
                name={'data.description'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    label={'details'}
                    placeholder={'details'}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    // multiline
                  />
                )}
              />
              <Controller
                name={'data.location'}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => {
                  const [first, second, third] = value?.split(', ') || [];
                  return (
                    <Input
                      label={'location'}
                      placeholder={'location'}
                      value={
                        first && second
                          ? `${first}, ${second}, ${third} ...`
                          : value
                      }
                      onChange={onChange}
                      onBlur={onBlur}
                      onPress={() =>
                        navigate(routNames.CHOOSE_LOCATION, {
                          address: getValues('data.region'),
                        })
                      }
                      editable={false}
                      multiline={false}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                      renderRightIcon={() => (
                        <Icon
                          name={ICON_NAMES.LOCATION}
                          color={Colors.oxford_blue['200']}
                        />
                      )}
                    />
                  );
                }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: normalize(8) }}>
                  <Controller
                    name={'data.date'}
                    control={control}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        label={'date'}
                        placeholder={'date'}
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
                    name={'data.duration'}
                    control={control}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        label={'duration'}
                        placeholder={'duration'}
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
                name={'data.ticket'}
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
                        activeColor={Colors.purple['500']}
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
                  <View>
                    <Controller
                      name={'data.participantCount'}
                      control={control}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Input
                          label={'participant_count'}
                          placeholder={'participant_count'}
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={{ flex: 0.4 }}>
                        <Controller
                          name={'data.currency'}
                          control={control}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <Input
                              label={'currency'}
                              placeholder={'Դ'}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              editable={false}
                            />
                          )}
                        />
                      </View>
                      <View style={{ flex: 1, marginLeft: normalize(8) }}>
                        <Controller
                          name={'data.price'}
                          control={control}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <Input
                              label={'price'}
                              placeholder={'price'}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                            />
                          )}
                        />
                      </View>
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
                  name={'data.eventType'}
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
                          backgroundColor: Colors.purple['200'],
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
                                  backgroundColor: Colors.purple['500'],
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
                                  backgroundColor: Colors.purple['500'],
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
                            children={'public'}
                            globalStyle={{
                              color:
                                value === 'OPEN'
                                  ? Colors.purple['500']
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
                                  ? Colors.purple['500']
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
              date={date || new Date()}
              minimumDate={new Date()}
              onConfirm={date => {
                setOpenDate(false);
                setValue('data.date', date);
                setValue('data.start_time', date);
                setValue('data.startDate', date);
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
          title={update ? 'update_event' : 'create_event'}
          textStyle={{ color: Colors.white }}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default Create;
