import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import 'moment/min/locales';
import React from 'react';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';

const CustomDate = ({ date, onSelectDate, selected, weekends, disabled }) => {
  const day = moment(date).format('ddd');
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D');
  const weekend = weekends.includes(date);
  // get the full date e.g 2023-05-17 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD');

  const selectedDate = moment(selected).format('YYYY-MM-DD') === fullDate;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (!disabled) {
          onSelectDate(fullDate);
        }
      }}
      style={{
        alignItems: 'center',
        marginHorizontal: normalize(4),
        overflow: 'hidden',
      }}>
      <Text
        style={[
          {
            ...FontStyle.text_h5.regular,
            color: weekend
              ? Colors.red['600']
              : disabled
              ? Colors.oxford_blue['200']
              : Colors.oxford_blue['300'],
          },
        ]}>
        {day}
      </Text>
      <View
        style={{
          minWidth: normalize(40),
          paddingVertical: normalize(10),
          paddingHorizontal: normalize(8),
          backgroundColor: selectedDate
            ? Colors.orange['500']
            : Colors.oxford_blue['30'],
          borderRadius: 12,
          overflow: 'hidden',
          alignItems: 'center',
        }}>
        <Text
          style={[
            {
              ...FontStyle.text_h5.regular,
              color: selectedDate
                ? Colors.white
                : disabled
                ? Colors.oxford_blue['200']
                : Colors.grey['500'],
            },
          ]}>
          {dayNumber < 10 ? `0${dayNumber}` : dayNumber}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { CustomDate };
