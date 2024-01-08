import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from 'components/Header';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { Colors, FontStyle } from 'assets/RootStyles';
import Input from 'components/Input';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment/moment';
import DatePicker from 'react-native-date-picker';
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MImage from 'components/MImage';
import dispatch from 'utils/dispatch/dispatch';
import { sendMeetingRequest } from 'state/events/operations/sendMeetingRequest';
import { isEmpty } from 'lodash';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { back } from 'services/NavigationService';

function SendRequest({ speaker, setScreen, route }) {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState();
  const [freeDays, setSelectedFreeDays] = useState({});
  const [selectedTime, setSelectedTime] = useState();

  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      date: new Date(),
      startDate: moment().toDate(),
      duration: '2',
    },
  });
  const initialDate = moment().format('YYYY-MM-DD');
  const mutatedImage = speaker?.pictures?.[
    speaker?.pictures.length - 1
  ]?.fileDownloadUri?.replace(':8085', ':8086');
  const speakerName = `${speaker.firstName} ${speaker?.lastName}`;
  const [openDate, setOpenDate] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const subscribe = navigation.addListener('blur', () => {
      setScreen('choose_category');
    });

    return () => {
      subscribe();
    };
  }, [navigation]);

  useEffect(() => {
    if (!isEmpty(speaker?.freeDays)) {
      setTimeout(() => {
        const mutatedDays = speaker?.freeDays.reduce((acc, item, index) => {
          acc[item.freeDay] = item.freeTimes;

          return acc;
        }, {});

        setSelectedFreeDays(mutatedDays);
      }, 300);
    }
  }, [speaker]);

  const marked = useMemo(() => {
    const marks = {};
    speaker?.freeDays?.map(({ freeDay }) => {
      marks[initialDate] = {
        disabled: true,
      };
      marks[freeDay] = {
        marked: true,
        disabled: false,
        selected: freeDay === selected,
        disableTouchEvent: freeDay === selected,
        dotColor: Colors.purple['500'],
        selectedColor: Colors.purple['200'],
        selectedTextColor: Colors.purple['500'],
      };
    });
    return marks;
  }, [speaker, selected]);

  const onDayPress = useCallback(day => {
    scrollRef?.current?.scrollToEnd({ animated: true });
    setSelected(day.dateString);
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        ref={scrollRef}
        style={{
          flex: 1,
          marginHorizontal: normalize(16),
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + normalize(40),
        }}>
        <Header
          title={'Send Request'}
          backPress={() => {
            console.log(route);
            if (route?.params?.screen) {
              back();
            } else {
              setScreen('choose_a_speaker');
            }
          }}
          containerStyle={{
            paddingHorizontal: 0,
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: normalize(10),
          }}>
          <MImage
            source={{ uri: mutatedImage }}
            style={{
              width: normalize(122),
              height: normalize(150),
              borderRadius: normalize(12),
              backgroundColor: Colors.white,
              overflow: 'hidden',
            }}
            type={'profile'}
          />
          <CustomText
            children={speakerName}
            globalStyle={{
              ...FontStyle.text_h4.medium,
              paddingTop: normalize(5),
            }}
          />
          <CustomText
            children={speaker.position}
            globalStyle={{
              ...FontStyle.text_h5.medium,
              color: Colors.oxford_blue['300'],
            }}
          />
          <CustomText
            children={speaker.about}
            globalStyle={{
              ...FontStyle.text_h5.regular,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Controller
            name={'topic'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                label={'Topic of the visit'}
                placeholder={'Topic of the visit'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                backgroundColor={Colors.white}
              />
            )}
          />
          <View style={{ marginTop: normalize(20) }}>
            <Calendar
              style={{
                backgroundColor: Colors.white,
                borderRadius: normalize(16),
                overflow: 'hidden',
              }}
              onDayPress={onDayPress}
              enableSwipeMonths
              disableAllTouchEventsForDisabledDays
              theme={{
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: Colors.purple['200'],
                selectedDayTextColor: Colors.purple['500'],
                arrowColor: Colors.purple['500'],
                todayTextColor: undefined,
                dayTextColor: '#2d4150',
                calendarBackground: Colors.white,
                textDisabledColor: Colors.oxford_blue['100'],
              }}
              markedDates={marked}
              disabledByDefault
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: normalize(20),
            }}>
            {freeDays?.[selected]?.map((item, index) => {
              const selectedItem = selectedTime === item;
              return (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.9}
                  onPress={() => setSelectedTime(item)}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: normalize(10),
                    borderRadius: normalize(12),
                    backgroundColor: selectedItem
                      ? Colors.purple['500']
                      : Colors.white,
                    marginLeft: index % 3 === 1 ? normalize(16) : 0,
                    marginRight:
                      index % 3 === 2 || index % 3 === 1 ? normalize(16) : 0,
                  }}>
                  <View>
                    <CustomText
                      children={item}
                      globalStyle={{
                        ...FontStyle.text_h5.regular,
                        color: selectedItem ? Colors.white : Colors.grey['500'],
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: normalize(20),
            marginBottom: normalize(8),
          }}>
          <Button
            title={'Send'}
            onPress={() => {
              dispatch(
                sendMeetingRequest({
                  id: speaker.id,
                  body: {
                    freeDay: selected,
                    freeTimes: [selectedTime],
                  },
                }),
              );
            }}
            textStyle={{ color: Colors.white }}
          />
        </View>
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
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default SendRequest;
