import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, fullScreen, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { isEmpty } from 'lodash';

const TopEvents = () => {
  const { week_top_events } = useSelector(({ events }) => events);
  const [selected, setSelected] = useState(false);
  const renderTopEventItem = useCallback(
    ({ item, index }) => {
      return (
        <Pressable
          onPress={() => {
            navigate(routNames.EVENT_DETAIL, {
              event: item,
            });
          }}>
          <View
            style={{
              width: fullScreen.width * 0.8,
              borderRadius: normalize(24),
              ...Shadow,
            }}>
            <SharedElement id={`item.${item?.id}.photo`}>
              <Image
                source={{
                  uri:
                    item?.pictures?.[0]?.fileDownloadUri ||
                    item?.preferences?.[0]?.picture?.fileDownloadUri,
                }}
                style={{
                  width: fullScreen.width * 0.8,
                  height: normalize(100),
                  justifyContent: 'flex-end',
                }}
                borderTopRightRadius={normalize(24)}
                borderTopLeftRadius={normalize(24)}
              />
            </SharedElement>

            <SharedElement id={`item.${item?.id}.info`}>
              <View
                style={{
                  height: normalize(100),
                  borderBottomRightRadius: normalize(24),
                  borderBottomLeftRadius: normalize(24),
                  backgroundColor: Colors.white,
                }}>
                <View
                  style={{
                    width: normalize(55),
                    height: normalize(47),
                    borderRadius: normalize(8),
                    position: 'absolute',
                    backgroundColor: Colors.white,
                    top: -normalize(35),
                    left: normalize(16),
                    zIndex: 999,
                    ...Shadow,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    children={moment(item?.startDate).format('DD')}
                    globalStyle={{
                      ...FontStyle.text_h2.bold,
                      color: Colors.purple['500'],
                    }}
                  />
                  <CustomText
                    children={moment(item?.startDate).format('MMM')}
                    globalStyle={{
                      ...FontStyle.text_h6.regular,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: normalize(20),
                    marginHorizontal: normalize(16),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      marginTop: normalize(4),
                    }}>
                    <View style={{ flex: 1 }}>
                      <CustomText
                        children={item.name}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                        globalStyle={{
                          ...FontStyle.text_h4.bold,
                        }}
                      />
                      <CustomText
                        children={item.address}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                        globalStyle={{
                          ...FontStyle.text_h6.regular,
                          color: Colors.oxford_blue['200'],
                        }}
                      />
                      <CustomText
                        children={`${moment(item.startDate).format(
                          'h:mm A',
                        )} - ${moment(item.endDate).format('h:mm A')}`}
                        globalStyle={{
                          ...FontStyle.text_h6.regular,
                          color: Colors.oxford_blue['200'],
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => setSelected(!selected)}
                      style={{
                        padding: normalize(10),
                        backgroundColor: selected
                          ? Colors.purple['200']
                          : undefined,
                        borderRadius: normalize(100),
                      }}>
                      <Icon
                        name={ICON_NAMES.SAVE}
                        backgroundColor={
                          selected ? Colors.purple['500'] : undefined
                        }
                        color={Colors.purple['500']}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </SharedElement>
          </View>
        </Pressable>
      );
    },
    [selected],
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: normalize(16),
          margin: normalize(10),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CustomText
          children={'best_of_the_week'}
          globalStyle={{
            ...FontStyle.text_h4.regular,
          }}
        />
        {/*<Text*/}
        {/*  style={{*/}
        {/*    ...FontStyle.text_h5.regular,*/}
        {/*    color: Colors.oxford_blue['200'],*/}
        {/*  }}>*/}
        {/*  See all*/}
        {/*</Text>*/}
      </View>
      <FlatList
        horizontal
        data={week_top_events}
        renderItem={renderTopEventItem}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Icon
                name={ICON_NAMES.EMPTY_STATES.EVENTS}
                size={normalize(70)}
              />
              <CustomText
                children={'no_events_found'}
                globalStyle={{
                  ...FontStyle.text_h5.medium,
                  color: Colors.grey['500'],
                  marginTop: normalize(4),
                }}
              />
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ width: normalize(8) }} />}
        contentContainerStyle={[
          {
            paddingHorizontal: normalize(16),
            paddingBottom: normalize(10),
          },
          isEmpty(week_top_events) ? { flex: 1 } : null,
        ]}
      />
    </View>
  );
};

export default TopEvents;
