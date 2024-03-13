import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { normalize } from 'assets/RootStyles/normalize';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { navigate } from 'services/NavigationService';
import {
  Colors,
  Fonts,
  FontStyle,
  fullScreen,
  Shadow,
} from 'assets/RootStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import { CustomText } from 'components/Text';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { routNames } from 'constants/routNames';
import Button from 'components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { deviceInfo } from 'assets/deviceInfo';
import dispatch from 'utils/dispatch/dispatch';
import { getEventById } from 'state/events/operations/getEventById';
import { userFollow } from 'state/user/operations/follow';
import { likeEvent } from 'state/events/operations/likeEvent';
import { clean_verification_token } from 'state/user';
import { isEmpty } from 'lodash';
import MImage from 'components/MImage';
import { joinEvent } from 'state/events/operations/joinEvent';
// import 'moment/dist/locale/hy-am';

const EventDetail = ({ navigation, route }) => {
  const { week_top_events, selected_event } = useSelector(
    ({ events }) => events,
  );
  const { currentUser } = useSelector(({ user }) => user);
  const [selected, setSelected] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [snapIndex, setSnapIndex] = useState();
  const [snapPoints, setSnapPoints] = useState(['1%', '70%', '85%']);
  const [active, setActive] = useState(route?.params?.event?.liked);
  const [event, setEvent] = useState(route?.params?.event);
  const adm = route?.params?.adm || currentUser?.role === 'ADMIN';
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef(null);
  const creator = currentUser?.id === event?.creator?.id;
  const [address, city, country] = event?.address?.split(', ');
  const mutatedImage = event?.creator?.pictures?.[
    event?.creator?.pictures.length - 1
  ]?.fileDownloadUri?.replace(':8085', ':8086');

  useEffect(() => {
    if (!isEmpty(selected_event)) {
      setEvent(selected_event);
      setActive(selected_event.liked);
    }
  }, [route, selected_event]);

  useLayoutEffect(() => {
    dispatch(getEventById({ id: event?.id }));
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(clean_verification_token());
    });
    if (snapPoints.length === 3) {
      if (deviceInfo.small_screen) {
        setSnapPoints([`${normalize(60)}%`, `${normalize(80)}%`]);
      } else {
        setSnapPoints(['70%', '85%']);
      }
    }

    setTimeout(() => {
      setSnapIndex(0);
    }, 250);

    return () => {
      unsubscribe();
    };
  }, []);
  // moment.locale('ru');
  // console.log(moment().format('LL'), 'HAYEREN');
  const renderTopEventItem = useCallback(
    ({ item, index }) => {
      return (
        <Pressable
          onPress={() => {
            setSnapIndex(0);
            navigate(routNames.EVENT_DETAIL, {
              event: item,
            });
          }}>
          <View
            style={{
              width: fullScreen.width * 0.6,
              borderRadius: normalize(24),
              ...Shadow,
            }}>
            <SharedElement id={`item.${item?.id}.photo`}>
              <MImage
                source={{
                  uri:
                    item?.pictures?.[0]?.fileDownloadUri ||
                    item?.preferences?.[0]?.picture?.fileDownloadUri,
                }}
                style={{
                  width: fullScreen.width * 0.6,
                  height: normalize(100),
                  justifyContent: 'flex-end',
                  borderTopRightRadius: normalize(24),
                  borderTopLeftRadius: normalize(24),
                }}
                type={'image'}
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
                  width: normalize(47),
                  height: normalize(40),
                  borderRadius: normalize(8),
                  position: 'absolute',
                  backgroundColor: Colors.white,
                  top: -normalize(27),
                  left: normalize(16),
                  zIndex: 999,
                  ...Shadow,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomText
                  children={moment(item?.startDate).format('DD')}
                  globalStyle={{
                    ...FontStyle.text_h3.bold,
                    color: Colors.purple['500'],
                  }}
                />
                <CustomText
                  children={moment(item?.startDate).format('MMM')}
                  globalStyle={{
                    fontWeight: '400',
                    fontSize: normalize(11),
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: normalize(18),
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
                      children={item?.name}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                      globalStyle={{
                        ...FontStyle.text_h5.bold,
                      }}
                    />
                    <CustomText
                      children={item.address}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        fontSize: normalize(11),
                        color: Colors.oxford_blue['200'],
                      }}
                    />
                    <CustomText
                      children={`${moment(item.startDate).format(
                        'h:mm A',
                      )} - ${moment(item.endDate).format('h:mm A')}`}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        fontSize: normalize(11),
                        color: Colors.oxford_blue['200'],
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      setSelected(!selected);
                    }}
                    style={{
                      padding: normalize(8),
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
                      size={normalize(20)}
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
  console.log(event, "require('../../../../../../assets/images/noPic.jpeg')");
  return (
    <View style={{ flex: 1 }}>
      <SharedElement id={`item.${event.id}.photo`}>
        <MImage
          source={{
            uri:
              event?.pictures?.[0]?.fileDownloadUri ||
              event?.preferences?.[0]?.picture?.fileDownloadUri,
          }}
          style={{
            width: '100%',
            height: normalize(260),
            zIndex: 0,
          }}
          type={'image'}
        />
      </SharedElement>
      <View style={{ width: '100%', position: 'absolute', top: 0 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: normalize(16),
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: normalize(30),
              height: normalize(30),
              borderRadius: normalize(20),
              backgroundColor: Colors.white,
              marginTop: insets.top + normalize(16),
              alignItems: 'center',
              justifyContent: 'center',
              ...Shadow,
            }}>
            <Icon name={ICON_NAMES.ARROW.LEFT} size={normalize(20)} />
          </TouchableOpacity>
          <View
            style={{
              marginTop: insets.top + normalize(16),
            }}>
            {creator || adm ? (
              <TouchableOpacity
                onPress={() => navigate(routNames.MORE_STATE, { event, adm })}
                style={{
                  width: normalize(35),
                  height: normalize(35),
                  borderRadius: normalize(20),
                  backgroundColor: Colors.white,
                  marginLeft: normalize(16),

                  alignItems: 'center',
                  justifyContent: 'center',
                  ...Shadow,
                }}>
                <View
                  style={{
                    transform: [
                      {
                        rotate: '90deg',
                      },
                    ],
                  }}>
                  <Icon name={ICON_NAMES.MORE_ICON} size={normalize(20)} />
                </View>
              </TouchableOpacity>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      likeEvent({
                        id: event.id,
                        callback: () => {
                          setActive(!active);
                        },
                      }),
                    );
                  }}
                  activeOpacity={0.9}
                  style={{
                    width: normalize(35),
                    height: normalize(35),
                    padding: normalize(10),
                    borderRadius: normalize(30),
                    backgroundColor: active
                      ? Colors.yellow['200']
                      : Colors.white,
                    marginLeft: normalize(16),
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...Shadow,
                  }}>
                  <Icon
                    name={ICON_NAMES.SAVE}
                    backgroundColor={active ? Colors.white : undefined}
                    color={active ? Colors.white : Colors.purple['500']}
                  />
                </TouchableOpacity>
                {/*<TouchableOpacity*/}
                {/*  // onPress={() => setActive(!active)}*/}
                {/*  activeOpacity={0.9}*/}
                {/*  style={{*/}
                {/*    width: normalize(35),*/}
                {/*    height: normalize(35),*/}
                {/*    padding: normalize(10),*/}
                {/*    borderRadius: normalize(30),*/}
                {/*    backgroundColor: Colors.white,*/}
                {/*    marginLeft: normalize(16),*/}
                {/*    alignItems: 'center',*/}
                {/*    justifyContent: 'center',*/}
                {/*    ...Shadow,*/}
                {/*  }}>*/}
                {/*  <Icon name={ICON_NAMES.SHARE} color={Colors.purple['500']} />*/}
                {/*</TouchableOpacity>*/}
              </View>
            )}
          </View>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={snapIndex}
        onChange={index => setSnapIndex(index)}
        handleIndicatorStyle={{ backgroundColor: undefined }}
        style={{
          borderTopLeftRadius: normalize(24),
          borderTopRightRadius: normalize(24),
          overflow: 'hidden',
        }}
        backgroundStyle={{
          backgroundColor: Colors.white,
        }}>
        <SharedElement id={`item.${event?.id}.info`}>
          <ScrollView
            onScrollEndDrag={e => {
              if (e.nativeEvent.contentOffset.y > 50 && snapIndex !== 1) {
                setSnapIndex(1);
                return;
              }

              if (e.nativeEvent.contentOffset.y <= 10 && snapIndex !== 0) {
                setSnapIndex(0);
                return;
              }
            }}
            contentContainerStyle={{ paddingBottom: normalize(32) }}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal: normalize(16),
                marginBottom: normalize(32),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomText
                  children={event.name}
                  globalStyle={{
                    ...FontStyle.text_h3.semi_bold,
                    paddingBottom: normalize(10),
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <View
                  style={{
                    width: normalize(36),
                    height: normalize(36),
                    borderRadius: normalize(14),
                    backgroundColor: Colors.purple['200'],
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={ICON_NAMES.CALENDAR} />
                </View>

                <View style={{ marginLeft: normalize(16) }}>
                  <CustomText
                    children={moment(event.startDate).format(
                      'ddd, MMM DD, YYYY',
                    )}
                    globalStyle={{
                      ...FontStyle.text_h5.regular,
                    }}
                  />
                  <CustomText
                    children={`${moment(event.startDate).format(
                      'h:mm A',
                    )} - ${moment(event.endDate).format('h:mm A')}`}
                    globalStyle={{
                      ...FontStyle.text_h6.regular,
                      color: Colors.oxford_blue['200'],
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginTop: normalize(16),
                }}>
                <View
                  style={{
                    width: normalize(36),
                    height: normalize(36),
                    borderRadius: normalize(14),
                    backgroundColor: Colors.purple['200'],
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name={ICON_NAMES.COMPASS} />
                </View>

                <View style={{ marginLeft: normalize(16) }}>
                  <CustomText
                    children={address}
                    globalStyle={{
                      ...FontStyle.text_h5.regular,
                    }}
                  />
                  <CustomText
                    children={`${city}, ${country}`}
                    globalStyle={{
                      ...FontStyle.text_h6.regular,
                      color: Colors.oxford_blue['200'],
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: normalize(16),
                }}>
                <View
                  style={{
                    width: normalize(36),
                    height: normalize(36),
                    borderRadius: normalize(14),
                    backgroundColor: Colors.purple['200'],
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      transform: [
                        {
                          rotate: '135deg',
                        },
                      ],
                    }}>
                    <Icon name={ICON_NAMES.TICKET} />
                  </View>
                </View>

                <View style={{ marginLeft: normalize(16) }}>
                  <CustomText
                    children={event.price || 'Free'}
                    globalStyle={{
                      ...FontStyle.text_h5.regular,
                    }}
                  />
                </View>
              </View>

              <View style={{ marginTop: normalize(16) }}>
                <CustomText
                  children={'About'}
                  globalStyle={{
                    ...FontStyle.text_h4.semi_bold,
                  }}
                />
                <CustomText
                  children={
                    readMore
                      ? event?.description
                      : event.description.slice(0, 160)
                  }
                  globalStyle={{
                    ...FontStyle.text_h4.regular,
                    color: Colors.oxford_blue['300'],
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: normalize(32),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: normalize(50),
                      height: normalize(50),
                      borderRadius: normalize(25),
                      backgroundColor: Colors.oxford_blue['200'],
                    }}>
                    <MImage
                      source={mutatedImage}
                      style={{
                        width: normalize(50),
                        height: normalize(50),
                        borderRadius: normalize(25),
                      }}
                    />
                  </View>
                  <View style={{ marginLeft: normalize(8) }}>
                    <CustomText
                      children={event?.creatorName}
                      globalStyle={{
                        ...FontStyle.text_h4.regular,
                      }}
                    />
                    <CustomText
                      children={'Organizer'}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        color: Colors.oxford_blue['200'],
                      }}
                    />
                  </View>
                </View>
                {currentUser?.id !== event?.creatorId ? (
                  <Button
                    containerStyle={{
                      flex: 0.5,
                      paddingVertical: normalize(6),
                      backgroundColor: Colors.purple['200'],
                    }}
                    title={
                      event?.creator?.followersId?.includes(currentUser?.id)
                        ? 'following'
                        : 'follow'
                    }
                    textStyle={{
                      ...FontStyle.text_h5.medium,
                      color: Colors.purple['500'],
                    }}
                    onPress={() => {
                      dispatch(userFollow({ id: event?.creator?.id }));
                    }}
                  />
                ) : null}
              </View>
            </View>
            {!isEmpty(week_top_events.filter(it => it.id !== event.id)) ? (
              <View>
                <CustomText
                  children={'More events like this'}
                  globalStyle={{
                    ...FontStyle.text_h4.semi_bold,
                    paddingHorizontal: normalize(16),
                  }}
                />
                <FlatList
                  horizontal
                  data={week_top_events.filter(it => it.id !== event.id)}
                  renderItem={renderTopEventItem}
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => (
                    <View style={{ width: normalize(8) }} />
                  )}
                  contentContainerStyle={{
                    paddingVertical: normalize(16),
                    paddingHorizontal: normalize(16),
                  }}
                />
              </View>
            ) : null}
            {currentUser?.id !== event?.creator?.id ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Button
                  title={event?.price ? 'buy_ticket' : 'join'}
                  values={{ price: event?.price ? `${event?.price} Դ` : '' }}
                  textStyle={{
                    ...FontStyle.text_h5.medium,
                    color: Colors.white,
                  }}
                  onPress={() => {
                    if (event?.price) {
                      navigate(routNames.BUY_TICKET, { event });
                      return;
                    }

                    const body = {
                      eventId: event?.id,
                      fromLat: 0,
                      fromLon: 0,
                      needTaxi: false,
                      passengersCount: 0,
                      ticketCount: 1,
                    };
                    dispatch(
                      joinEvent({
                        body,
                      }),
                    );
                  }}
                />
              </View>
            ) : null}
          </ScrollView>
        </SharedElement>
      </BottomSheet>
    </View>
  );
};

export default EventDetail;
