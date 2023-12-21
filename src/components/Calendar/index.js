import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { CustomDate } from '../Date';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { FlatList } from 'react-native-gesture-handler';

const Calendar = ({ onSelectDate, selected, minDate, showMonths = false }) => {
  const [montX, setMonthX] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [dates, setDates] = useState([]);
  const calendarRef = useRef(null);
  const monthsRef = useRef(null);
  const months = moment.months();
  const currentMonth = moment().month();
  const currentYear = moment().year();
  const [days, setDays] = useState(31);
  const [currentDay, setCurrentDay] = useState();

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < days; i++) {
      const date = moment()
        .clone()
        .month(months[selectedMonth])
        .date(i + 1);
      _dates.push(date);
    }

    setDates(_dates);
  };

  useEffect(() => {
    if (selectedMonth) {
      getDates();
    }
  }, [days, selectedMonth]);

  useEffect(() => {
    setSelectedMonth(currentMonth);
    setDays(moment(`2023-${currentMonth + 1}`, 'YYYY-MM').daysInMonth());
  }, [currentMonth]);

  useEffect(() => {
    if (monthsRef?.current) {
      setTimeout(() => {
        monthsRef?.current?.scrollToIndex({
          animated: true,
          index: selectedMonth,
          viewPosition: 0.5,
        });
      }, 500);
    }

    setDays(moment(`2023-${selectedMonth + 1}`, 'YYYY-MM').daysInMonth());
  }, [selectedMonth, dates]);

  useEffect(() => {
    if (calendarRef.current && selected) {
      setCurrentDay(
        dates.findIndex(item => {
          return (
            moment(item).format('YYYY-MM-DD') ===
            moment(selected).format('YYYY-MM-DD')
          );
        }),
      );
    }
  }, [calendarRef.current, selected, dates, selectedMonth]);

  useEffect(() => {
    console.log(currentDay, 999);
    if (currentDay && currentDay !== -1) {
      setTimeout(() => {
        calendarRef?.current?.scrollToIndex({
          animated: true,
          index: currentDay,
          viewPosition: 0.5,
        });
      }, 500);
    }
  }, [currentDay]);

  const arrayOfWeekendItems = dates.filter(item => {
    // Get day of provided data
    const day = moment(item).day();
    // Return true if it's saturday or sunday, either false
    return day === 6 || day === 0;
  });

  return (
    <View
      style={{
        borderRadius: normalize(12),
      }}>
      {showMonths ? (
        <FlatList
          ref={monthsRef}
          data={months}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScrollToIndexFailed={() => console.log('failed')}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                monthsRef?.current?.scrollToIndex({
                  animated: true,
                  index: index,
                  viewPosition: 0.5,
                });
                setSelectedMonth(index);
              }}
              onLayout={e => setMonthX(e.nativeEvent.layout.x)}
              style={{
                alignItems: 'center',
                paddingHorizontal: normalize(11),
              }}>
              <Text
                style={{
                  ...FontStyle.text_h5.medium,
                  color:
                    index === selectedMonth
                      ? Colors.grey['500']
                      : Colors.oxford_blue['100'],
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : null}

      <FlatList
        ref={calendarRef}
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScrollToIndexFailed={() => console.log('failed')}
        renderItem={({ item, index }) => {
          return (
            <CustomDate
              key={index}
              date={item}
              onSelectDate={date => {
                calendarRef?.current?.scrollToIndex({
                  animated: true,
                  index: index,
                  viewPosition: 0.5,
                });
                if (date === selected) {
                  console.log(selected);
                  onSelectDate('');
                } else {
                  onSelectDate(date);
                }
              }}
              selected={selected}
              weekends={arrayOfWeekendItems}
              disabled={item < minDate}
            />
          );
        }}
        contentContainerStyle={{
          marginBottom: normalize(10),
          paddingHorizontal: normalize(16),
        }}
      />
    </View>
  );
};

export default Calendar;
