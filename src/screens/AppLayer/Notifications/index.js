import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { Colors, FontStyle, fullScreen } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'components/Svgs';
import dispatch from 'utils/dispatch/dispatch';
import { isEmpty, throttle } from 'lodash';
import { findNotificationByFrom } from 'state/notifications/operations/findNotificationByFrom';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import { getRequestedEvents } from 'state/events/operations/getRequestedEvents';
import { CustomText } from 'components/Text';

const NotificationScreen = ({ navigation }) => {
  const { currentUser } = useSelector(({ user }) => user);
  const { list } = useSelector(({ notification }) => notification);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const [typeList, setTypeList] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  useEffect(() => {
    setSelectedType('all');
    const subscribe = navigation.addListener('focus', () => {
      getNotifications();
    });

    return () => subscribe();
  }, []);

  useEffect(() => {
    getNotifications();
  }, [selectedType]);

  function closeRow(index) {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }

    prevOpenedRow = row[index];
  }

  let row = [];
  let prevOpenedRow;
  const renderNotificationCards = useCallback(({ item, index }) => {
    return (
      <View />
      // <NotificationCard
      //   notification={item}
      //   index={index}
      //   row={row}
      //   closeRow={closeRow}
      //   type={selectedType}
      // />
    );
  }, []);

  const getNotifications = () => {
    const body = {
      callback: () => {
        setIsRefreshing(false);
      },
    };

    if (selectedType !== 'all') {
      body.params = { type: selectedType };
    }

    dispatch(findNotificationByFrom({ from: currentUser?.email }));
    dispatch(getRequestedEvents());
  };

  const onRefresh = throttle(async () => {
    if (!isRefreshing) {
      setIsRefreshing(true);
    }

    getNotifications();
  }, 3000);

  const renderRefreshControl = useCallback(() => {
    // Set a threshold value to determine which component to show
    if (isRefreshing) {
      return (
        <View
          style={{
            position: 'absolute',
            width: fullScreen.width,
            height: normalize(80),
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: normalize(10),
          }}>
          <ActivityIndicator
            size={'small'}
            tintColor={Colors.oxford_blue['500']}
          />
        </View>
      );
    }
  }, [isRefreshing]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingTop: normalize(16),
        }}>
        <View>
          <Header
            title={'notifications'}
            backIconContainer={{
              shadowOpacity: 0,
              backgroundColor: Colors.purple['200'],
            }}
          />
          <View>
            {/*<FlatList*/}
            {/*  horizontal*/}
            {/*  data={typeList}*/}
            {/*  renderItem={({ item }) => {*/}
            {/*    const selected =*/}
            {/*      item?.key === selectedType ||*/}
            {/*      (isEmpty(item) && selectedType === 'all');*/}
            {/*    return (*/}
            {/*      <TouchableOpacity*/}
            {/*        activeOpacity={0.8}*/}
            {/*        onPress={() => setSelectedType(item.key)}*/}
            {/*        style={{*/}
            {/*          paddingHorizontal: normalize(12),*/}
            {/*          paddingVertical: normalize(8),*/}
            {/*          borderRadius: normalize(50),*/}
            {/*          backgroundColor: Colors.purple['500'],*/}
            {/*          marginRight: normalize(8),*/}
            {/*        }}>*/}
            {/*        <Text*/}
            {/*          style={{*/}
            {/*            ...FontStyle.text_h5.regular,*/}
            {/*            color: selected*/}
            {/*              ? Colors.white*/}
            {/*              : Colors.oxford_blue['200'],*/}
            {/*          }}>*/}
            {/*          {isEmpty(item) ? 'All' : item?.value}*/}
            {/*        </Text>*/}
            {/*      </TouchableOpacity>*/}
            {/*    );*/}
            {/*  }}*/}
            {/*  contentContainerStyle={{ paddingVertical: normalize(12) }}*/}
            {/*/>*/}
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: Colors.oxford_blue['30'] }}>
          <FlatList
            data={list}
            renderItem={renderNotificationCards}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    marginHorizontal: normalize(48),
                  }}>
                  <Icon name={ICON_NAMES.EMPTY_STATES.NOTIFICATION} />
                  <CustomText
                    children={'no_notifications_yet'}
                    globalStyle={{
                      ...FontStyle.text_h2.medium,
                      color: Colors.grey['500'],
                      marginTop: normalize(10),
                      textAlign: 'center',
                    }}
                  />
                  <CustomText
                    children={'stay_tuned_for_updates'}
                    globalStyle={{
                      ...FontStyle.text_h5.regular,
                      color: Colors.oxford_blue['200'],
                      textAlign: 'center',
                    }}
                  />
                </View>
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={() => onRefresh()}
                // colors={[Colors.oxford_blue['500']]}
                // tintColor={Colors.oxford_blue['500']}
                tintColor="transparent"
                colors={['transparent']}
                style={{ backgroundColor: 'transparent' }}
                children={renderRefreshControl()}
              />
            }
            contentContainerStyle={[
              {
                paddingVertical: normalize(16),
              },
              isEmpty(list)
                ? {
                    flex: 0.8,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : null,
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
