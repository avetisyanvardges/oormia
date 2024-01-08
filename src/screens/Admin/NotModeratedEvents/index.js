import React, { useCallback, useEffect } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';
import dispatch from 'utils/dispatch/dispatch';
import { getAllNotModeratedEvents } from 'state/events/operations/getAllNotModeratedEvents';
import Header from 'components/Header';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { Colors, FontStyle, fullScreen, Shadow } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import moment from 'moment/moment';
import MImage from 'components/MImage';

const NotModeratedEvents = ({ navigation }) => {
  const { not_moderated } = useSelector(({ events }) => events);

  const handleFocus = useCallback(() => {
    dispatch(getAllNotModeratedEvents({}));
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = navigation?.addListener('focus', handleFocus);

    return unsubscribe;
  }, [navigation]);
  console.log(not_moderated);

  const renderEvent = useCallback(({ item, index }) => {
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
          <MImage
            source={{
              uri:
                item?.pictures?.[0]?.fileDownloadUri ||
                item?.preferences?.[0]?.picture?.fileDownloadUri,
            }}
            style={{
              width: fullScreen.width * 0.9,
              height: normalize(100),
              justifyContent: 'flex-end',
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}
            resizeMode={'stretch'}
          />
          <View style={{ marginLeft: normalize(10) }} />

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
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Not moderated events'} />
      <FlatList
        data={not_moderated}
        renderItem={renderEvent}
        contentContainerStyle={{ alignItems: 'center' }}
        ItemSeparatorComponent={() => (
          <View style={{ height: normalize(16) }} />
        )}
      />
    </View>
  );
};

export default NotModeratedEvents;
