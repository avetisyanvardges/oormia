import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { back } from 'services/NavigationService';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import dispatch from 'utils/dispatch/dispatch';
import {
  set_filter_by_date,
  set_filter_by_day,
  set_filter_by_partOfDate,
} from 'state/events';
import { useSelector } from 'react-redux';

const FiltersScreen = ({ route }) => {
  const { filter_by_day, filter_by_partOfDay } = useSelector(
    ({ events }) => events,
  );
  const [selectedDate, setSelectedDate] = useState({
    key: filter_by_day || '',
  });
  const [selectedTime, setSelectedTime] = useState({ key: '' });
  const insets = useSafeAreaInsets();
  const today = selectedDate.key === 'today';
  const tomorrow = selectedDate.key === 'tomorrow';
  const this_week = selectedDate.key === 'this_week';
  const choose_date = selectedDate.key === 'choose_date';
  const day = selectedTime.key === 'day';
  const night = selectedTime.key === 'night';
  const choose_time = selectedTime.key === 'choose_time';

  const handleSubmit = () => {
    if (selectedDate.key && (today || tomorrow || this_week)) {
      dispatch(set_filter_by_day(selectedDate.key));
    }

    if (selectedTime.key && (day || night)) {
      dispatch(set_filter_by_partOfDate(selectedTime.key));
    }

    back();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View
            style={{
              height: `${normalize(70)}%`,
              paddingHorizontal: normalize(16),
              paddingTop: normalize(24),
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <CustomText
                children={'Filters'}
                globalStyle={{
                  ...FontStyle.text_h3.medium,
                }}
              />
              <View style={{ marginTop: normalize(24) }}>
                <View>
                  <CustomText
                    children={'Location'}
                    globalStyle={{ ...FontStyle.text_h5.medium }}
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
                      <Icon
                        name={ICON_NAMES.COMPASS}
                        color={Colors.white}
                        size={normalize(16)}
                      />
                      <CustomText
                        children={'Current location'}
                        globalStyle={{
                          ...FontStyle.text_h6.regular,
                          color: Colors.white,
                          marginLeft: normalize(8),
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
                      }}>
                      <Icon
                        name={ICON_NAMES.SEARCH}
                        color={Colors.purple['500']}
                        size={normalize(16)}
                      />
                      <CustomText
                        children={'Find location'}
                        globalStyle={{
                          ...FontStyle.text_h6.regular,
                          color: Colors.purple['500'],
                          marginLeft: normalize(8),
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: normalize(24) }}>
                  <View>
                    <CustomText
                      children={'Date'}
                      globalStyle={{ ...FontStyle.text_h5.medium }}
                    />
                    <View
                      style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: normalize(8),
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          setSelectedDate({
                            key: 'today',
                            value: 'today',
                          })
                        }
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: normalize(8),
                          paddingHorizontal: normalize(12),
                          backgroundColor: today
                            ? Colors.purple['500']
                            : Colors.oxford_blue['30'],
                          borderRadius: normalize(16),
                        }}>
                        <CustomText
                          children={'Today'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: today ? Colors.white : Colors.purple['500'],
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          setSelectedDate({
                            key: 'tomorrow',
                            value: 'tomorrow',
                          })
                        }
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: normalize(8),
                          paddingHorizontal: normalize(12),
                          backgroundColor: tomorrow
                            ? Colors.purple['500']
                            : Colors.oxford_blue['30'],
                          borderRadius: normalize(16),
                          marginLeft: normalize(8),
                        }}>
                        <CustomText
                          children={'Tomorrow'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: tomorrow
                              ? Colors.white
                              : Colors.purple['500'],
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          setSelectedDate({
                            key: 'this_week',
                            value: 'this_week',
                          })
                        }
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: normalize(8),
                          paddingHorizontal: normalize(12),
                          backgroundColor: this_week
                            ? Colors.purple['500']
                            : Colors.oxford_blue['30'],
                          borderRadius: normalize(16),
                          marginLeft: normalize(8),
                        }}>
                        <CustomText
                          children={'This week'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: this_week
                              ? Colors.white
                              : Colors.purple['500'],
                          }}
                        />
                      </TouchableOpacity>
                      {/*<TouchableOpacity*/}
                      {/*  activeOpacity={0.9}*/}
                      {/*  onPress={() =>*/}
                      {/*    setSelectedDate({*/}
                      {/*      key: 'choose_date',*/}
                      {/*      value: '',*/}
                      {/*    })*/}
                      {/*  }*/}
                      {/*  style={{*/}
                      {/*    flexDirection: 'row',*/}
                      {/*    alignItems: 'center',*/}
                      {/*    paddingVertical: normalize(8),*/}
                      {/*    paddingHorizontal: normalize(12),*/}
                      {/*    backgroundColor: choose_date*/}
                      {/*      ? Colors.purple['500']*/}
                      {/*      : Colors.oxford_blue['30'],*/}
                      {/*    borderRadius: normalize(16),*/}
                      {/*    marginTop: normalize(8),*/}
                      {/*  }}>*/}
                      {/*  <Icon*/}
                      {/*    name={ICON_NAMES.CALENDAR}*/}
                      {/*    color={*/}
                      {/*      choose_date ? Colors.white : Colors.purple['500']*/}
                      {/*    }*/}
                      {/*    size={normalize(18)}*/}
                      {/*  />*/}
                      {/*  <CustomText*/}
                      {/*    children={*/}
                      {/*      selectedDate.key === 'choose_date'*/}
                      {/*        ? selectedDate.value*/}
                      {/*          ? selectedDate.value*/}
                      {/*          : 'Choose a date'*/}
                      {/*        : 'Choose a date'*/}
                      {/*    }*/}
                      {/*    globalStyle={{*/}
                      {/*      ...FontStyle.text_h6.regular,*/}
                      {/*      color: choose_date*/}
                      {/*        ? Colors.white*/}
                      {/*        : Colors.purple['500'],*/}
                      {/*      marginLeft: normalize(8),*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*</TouchableOpacity>*/}
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: normalize(24) }}>
                  <View>
                    <CustomText
                      children={'Time of day'}
                      globalStyle={{ ...FontStyle.text_h5.medium }}
                    />
                    <View
                      style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: normalize(8),
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          setSelectedTime({
                            key: 'day',
                            value: 'day',
                          })
                        }
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: normalize(8),
                          paddingHorizontal: normalize(12),
                          backgroundColor: day
                            ? Colors.purple['500']
                            : Colors.oxford_blue['30'],
                          borderRadius: normalize(16),
                        }}>
                        <CustomText
                          children={'Day'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: day ? Colors.white : Colors.purple['500'],
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          setSelectedTime({
                            key: 'night',
                            value: 'night',
                          })
                        }
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingVertical: normalize(8),
                          paddingHorizontal: normalize(12),
                          backgroundColor: night
                            ? Colors.purple['500']
                            : Colors.oxford_blue['30'],
                          borderRadius: normalize(16),
                          marginLeft: normalize(8),
                        }}>
                        <CustomText
                          children={'Night'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: night ? Colors.white : Colors.purple['500'],
                          }}
                        />
                      </TouchableOpacity>
                      {/*<TouchableOpacity*/}
                      {/*  activeOpacity={0.9}*/}
                      {/*  onPress={() =>*/}
                      {/*    setSelectedTime({*/}
                      {/*      key: 'choose_time',*/}
                      {/*      value: '',*/}
                      {/*    })*/}
                      {/*  }*/}
                      {/*  style={{*/}
                      {/*    flexDirection: 'row',*/}
                      {/*    alignItems: 'center',*/}
                      {/*    paddingVertical: normalize(8),*/}
                      {/*    paddingHorizontal: normalize(12),*/}
                      {/*    backgroundColor: choose_time*/}
                      {/*      ? Colors.purple['500']*/}
                      {/*      : Colors.oxford_blue['30'],*/}
                      {/*    borderRadius: normalize(16),*/}
                      {/*    marginTop: normalize(8),*/}
                      {/*    marginLeft: normalize(8),*/}
                      {/*  }}>*/}
                      {/*  <Icon*/}
                      {/*    name={ICON_NAMES.TIME}*/}
                      {/*    color={*/}
                      {/*      choose_time ? Colors.white : Colors.purple['500']*/}
                      {/*    }*/}
                      {/*    size={normalize(18)}*/}
                      {/*  />*/}
                      {/*  <CustomText*/}
                      {/*    children={*/}
                      {/*      selectedTime.key === 'choose_time'*/}
                      {/*        ? selectedTime.value*/}
                      {/*          ? selectedTime.value*/}
                      {/*          : 'Choose a time'*/}
                      {/*        : 'Choose a time'*/}
                      {/*    }*/}
                      {/*    globalStyle={{*/}
                      {/*      ...FontStyle.text_h6.regular,*/}
                      {/*      color: choose_time*/}
                      {/*        ? Colors.white*/}
                      {/*        : Colors.purple['500'],*/}
                      {/*      marginLeft: normalize(8),*/}
                      {/*    }}*/}
                      {/*  />*/}
                      {/*</TouchableOpacity>*/}
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginBottom: insets.bottom ? insets.bottom : normalize(16),
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <CustomText
                      children={'RESET'}
                      globalStyle={{
                        ...FontStyle.text_h5.regular,
                      }}
                    />
                  </View>
                  <Button
                    title={'Add'}
                    onPress={handleSubmit}
                    textStyle={{ color: Colors.white }}
                    containerStyle={{ flex: 1 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FiltersScreen;
