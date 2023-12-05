import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { Colors, FontStyle, fullScreen, Shadow } from 'assets/RootStyles';
import { SharedElement } from 'react-navigation-shared-element';
import { CustomText } from 'components/Text';
import moment from 'moment';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { useSelector } from 'react-redux';
import Header from 'components/Header';

const EventList = () => {
  const { events } = useSelector(({ events }) => events);
  const [selected, setSelected] = useState(false);

  const renderEventItem = useCallback(
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
              width: fullScreen.width * 0.9,
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
                  width: fullScreen.width * 0.9,
                  height: normalize(100),
                  justifyContent: 'flex-end',
                }}
                borderTopRightRadius={normalize(24)}
                borderTopLeftRadius={normalize(24)}
              />
            </SharedElement>

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
          </View>
        </Pressable>
      );
    },
    [selected],
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <Header title={'Events'} />
      <FlatList
        data={events}
        renderItem={renderEventItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: normalize(8) }} />}
        contentContainerStyle={{
          paddingBottom: normalize(10),
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default EventList;
