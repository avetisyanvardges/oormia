import React, { Fragment, useEffect } from 'react';
import { FlatList, Pressable, useWindowDimensions, View } from 'react-native';
import dispatch from 'utils/dispatch/dispatch';
import { getUpcomingEventHistory } from 'state/events/operations/getUpcomingEventHistory';
import { getEventHistory } from 'state/events/operations/getEventHistory';
import MImage from 'components/MImage';
import { normalize } from 'assets/RootStyles/normalize';
import { useSelector } from 'react-redux';
import { CustomText } from 'components/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import moment from 'moment';
import Underline from 'components/Underline';
import { SharedElement } from 'react-navigation-shared-element';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { isEmpty } from 'lodash';

export const UpcomingTickets = () => {
  const { upcoming } = useSelector(({ events }) => events);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <FlatList
        data={upcoming}
        keyExtractor={(item, index) => `${index}-${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <Fragment>
              <Pressable
                onPress={() => {
                  navigate(routNames.TICKET_DETAILS, {
                    event: item,
                  });
                }}
                style={{ flexDirection: 'row' }}>
                <SharedElement id={`item.${item?.id}.photo`}>
                  <MImage
                    source={{
                      uri:
                        item?.pictures?.[0]?.fileDownloadUri ||
                        item?.preferences?.[0]?.picture?.fileDownloadUri,
                    }}
                    style={{
                      width: normalize(60),
                      height: normalize(60),
                      borderRadius: normalize(12),
                    }}
                  />
                </SharedElement>
                <View style={{ flex: 1, marginLeft: normalize(16) }}>
                  <SharedElement id={`item.${item?.id}.info`}>
                    <CustomText
                      children={item.name}
                      globalStyle={{ ...FontStyle.text_h5.medium }}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: normalize(8),
                      }}>
                      <View>
                        <CustomText
                          children={'Date'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: Colors.oxford_blue['100'],
                          }}
                        />
                        <CustomText
                          children={moment(item.startDate).format(
                            'ddd, MMM D, YYYY',
                          )}
                          globalStyle={{
                            ...FontStyle.text_h5.regular,
                          }}
                        />
                      </View>
                      <View style={{ marginLeft: normalize(20) }}>
                        <CustomText
                          children={'Time'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: Colors.oxford_blue['100'],
                          }}
                        />
                        <CustomText
                          children={moment(item.startDate).format('HH:mm')}
                          translate={false}
                          globalStyle={{
                            ...FontStyle.text_h5.regular,
                          }}
                        />
                      </View>
                    </View>
                  </SharedElement>
                </View>
              </Pressable>
              {upcoming[index + 1] ? (
                <Underline style={{ marginVertical: normalize(16) }} />
              ) : null}
            </Fragment>
          );
        }}
        contentContainerStyle={[
          {
            backgroundColor: Colors.white,
            paddingHorizontal: normalize(16),
            paddingTop: normalize(16),
            paddingBottom: normalize(120),
          },
          isEmpty(upcoming) ? { flex: 1 } : null,
        ]}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: normalize(140),
                  height: normalize(140),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.purple['200'],
                  borderRadius: normalize(140),
                }}>
                <Icon name={ICON_NAMES.TICKET_EMPTY} size={normalize(70)} />
              </View>
              <CustomText
                children={'no_upcoming_tickets_found'}
                globalStyle={{
                  ...FontStyle.text_h2.medium,
                  color: Colors.grey['500'],
                  marginTop: normalize(10),
                }}
              />
              <CustomText
                children={'no_tickets_available'}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  color: Colors.oxford_blue['200'],
                  textAlign: 'center',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export const PastTickets = () => {
  const { event_history } = useSelector(({ events }) => events);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <FlatList
        data={event_history}
        keyExtractor={(item, index) => `${index}-${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <Fragment>
              <Pressable
                onPress={() => {
                  navigate(routNames.TICKET_DETAILS, {
                    event: item,
                  });
                }}
                style={{ flexDirection: 'row' }}>
                <SharedElement id={`item.${item?.id}.photo`}>
                  <MImage
                    source={{
                      uri:
                        item?.pictures?.[0]?.fileDownloadUri ||
                        item?.preferences?.[0]?.picture?.fileDownloadUri,
                    }}
                    style={{
                      width: normalize(60),
                      height: normalize(60),
                      borderRadius: normalize(12),
                    }}
                  />
                </SharedElement>
                <View style={{ flex: 1, marginLeft: normalize(16) }}>
                  <SharedElement id={`item.${item?.id}.info`}>
                    <CustomText
                      children={item.name}
                      globalStyle={{ ...FontStyle.text_h5.medium }}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: normalize(8),
                      }}>
                      <View>
                        <CustomText
                          children={'Date'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: Colors.oxford_blue['100'],
                          }}
                        />
                        <CustomText
                          children={moment(item.startDate).format(
                            'ddd, MMM D, YYYY',
                          )}
                          globalStyle={{
                            ...FontStyle.text_h5.regular,
                          }}
                        />
                      </View>
                      <View style={{ marginLeft: normalize(20) }}>
                        <CustomText
                          children={'Time'}
                          globalStyle={{
                            ...FontStyle.text_h6.regular,
                            color: Colors.oxford_blue['100'],
                          }}
                        />
                        <CustomText
                          children={moment(item?.startDate).format('HH:mm')}
                          translate={false}
                          globalStyle={{
                            ...FontStyle.text_h5.regular,
                          }}
                        />
                      </View>
                    </View>
                  </SharedElement>
                </View>
              </Pressable>
              {event_history[index + 1] ? (
                <Underline style={{ marginVertical: normalize(16) }} />
              ) : null}
            </Fragment>
          );
        }}
        contentContainerStyle={[
          {
            backgroundColor: Colors.white,
            paddingHorizontal: normalize(16),
            paddingTop: normalize(16),
            paddingBottom: normalize(120),
          },
          isEmpty(event_history) ? { flex: 1 } : null,
        ]}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: normalize(140),
                  height: normalize(140),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.purple['200'],
                  borderRadius: normalize(140),
                }}>
                <Icon name={ICON_NAMES.TICKET_EMPTY} size={normalize(70)} />
              </View>
              <CustomText
                children={'no_past_tickets_found'}
                globalStyle={{
                  ...FontStyle.text_h2.medium,
                  color: Colors.grey['500'],
                  marginTop: normalize(10),
                }}
              />
              <CustomText
                children={'no_tickets_available'}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  color: Colors.oxford_blue['200'],
                  textAlign: 'center',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const renderScene = SceneMap({
  upcoming: UpcomingTickets,
  past: PastTickets,
});

const TicketsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'upcoming', title: 'Upcoming' },
    { key: 'past', title: 'Past' },
  ]);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      dispatch(getEventHistory({}));
      dispatch(getUpcomingEventHistory({}));
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: insets.top,
          paddingHorizontal: normalize(16),
          backgroundColor: Colors.white,
        }}>
        <CustomText
          children={'my_tickets'}
          globalStyle={{ ...FontStyle.text_h2.medium }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TabView
          lazy
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: Colors.purple['500'] }}
              style={{
                backgroundColor: Colors.white,
                paddingTop: normalize(10),
                ...Shadow,
              }}
              tabStyle={{}}
              labelStyle={{}}
              renderLabel={({ route, color, focused }) => (
                <CustomText
                  children={route?.title?.toLowerCase()}
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                    color: focused
                      ? Colors.grey['500']
                      : Colors.oxford_blue['100'],
                  }}
                />
              )}
            />
          )}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          animationEnabled
        />
      </View>
      {/*<MImage*/}
      {/*  uri={base64 + upcoming?.[0]?.qr?.[0]?.qr}*/}
      {/*  style={{*/}
      {/*    width: normalize(240),*/}
      {/*    height: normalize(100),*/}
      {/*  }}*/}
      {/*  resizeMode={'contain'}*/}
      {/*/>*/}
    </View>
  );
};

export { TicketsScreen };
