import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors, FontStyle } from 'assets/RootStyles';
import Header from 'components/Header';
import { back } from 'services/NavigationService';
import { Calendar } from 'react-native-calendars';
import { normalize } from 'assets/RootStyles/normalize';
import moment from 'moment';
import { CustomText } from 'components/Text';
import { isEmpty } from 'lodash';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from 'screens/AuthLayer/SignUpUserData/style';
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import dispatch from 'utils/dispatch/dispatch';
import { addFreeDays } from 'state/user/operations/addFreeDays';

const freeTimes = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
];
const AddFreeDays = () => {
  const insets = useSafeAreaInsets();
  const initialDate = moment().format('YYYY-MM-DD');
  const minDate = moment().format('YYYY-MM-DD');
  const [selected, setSelected] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState();
  const [freeDate, setSelectedFreeDate] = useState({});
  const isFreeDateEmpty = useMemo(
    () => isEmpty(freeDate[selected]),
    [freeDate, selected],
  );

  const isFreeDateIncludeTime = useMemo(() => {
    return selectedTime && freeDate?.[selected]?.includes(selectedTime);
  }, [freeDate, selected, selectedTime]);

  useEffect(() => {
    setSelectedFreeDate(prevState => ({
      ...prevState,
      [selected]: !isFreeDateEmpty
        ? selectedTime
          ? isFreeDateIncludeTime
            ? freeDate[selected].filter(time => time !== selectedTime)
            : [...freeDate[selected], selectedTime]
          : [...freeDate[selected]]
        : selectedTime
        ? [selectedTime]
        : [],
    }));

    if (selectedTime) {
      setSelectedTime('');
    }
  }, [selected, selectedTime]);

  const onDayPress = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    const marks = {};
    Object.keys(freeDate).forEach(key => {
      marks[key] = {
        marked: !isEmpty(freeDate[key]),
        dotColor: Colors.purple['500'],
        selected: key === selected,
        disableTouchEvent: key === selected,
        selectedColor: Colors.purple['200'],
        selectedTextColor: Colors.purple['500'],
      };
    });
    return marks;
  }, [freeDate, selected]);

  const handleSubmit = () => {
    const mutateData = Object.entries(freeDate)
      .filter(([key, value]) => !isEmpty(value))
      .map(([key, value]) => ({
        freeDay: key,
        freeTimes: value,
      }));

    dispatch(addFreeDays({ body: mutateData }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.oxford_blue['30'] }}>
      <FlatList
        data={freeTimes}
        keyExtractor={(item, index) => `${index}-${item}`}
        numColumns={3}
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <Header title={'Add your free time'} backPress={() => back()} />
              </View>
              <View>
                <CustomText
                  children={
                    'Make your calendar work for you! Add your free days to effortlessly receive meeting requests and coordinate events without interruptions. '
                  }
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                    marginHorizontal: normalize(16),
                    marginVertical: normalize(16),
                    color: Colors.oxford_blue['200'],
                    lineHeight: 20,
                  }}
                />
                <Calendar
                  style={{
                    height: 350,
                    backgroundColor: Colors.white,
                    marginHorizontal: normalize(16),
                    borderRadius: normalize(16),
                    overflow: 'hidden',
                  }}
                  date={initialDate}
                  minDate={minDate}
                  maxDate={selectedTime ? selected : null}
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
                />
              </View>
              <View
                style={{
                  marginVertical: normalize(16),
                  marginHorizontal: normalize(16),
                }}>
                <CustomText
                  children={'Free times'}
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                  }}
                />
              </View>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          const selectedItem = freeDate?.[selected]?.includes(item);
          return (
            <TouchableOpacity
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
                marginLeft:
                  index % 3 === 0 || index % 3 === 1 ? normalize(16) : 0,
                marginRight:
                  index % 3 === 2 || index % 3 === 1 ? normalize(16) : 0,
              }}>
              <View>
                <CustomText
                  children={item}
                  translate={false}
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                    color: selectedItem ? Colors.white : Colors.grey['500'],
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: normalize(10) }} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: normalize(12),
          backgroundColor: Colors.oxford_blue['30'],
          paddingBottom: normalize(40),
        }}
      />
      <View
        style={{
          alignItems: 'center',
          paddingTop: normalize(10),
          paddingBottom: insets.bottom || normalize(16),
          backgroundColor: Colors.oxford_blue['30'],
        }}>
        <Button
          title="Add"
          textStyle={styles.buttonTextStyle}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default AddFreeDays;
