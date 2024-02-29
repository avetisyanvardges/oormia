import React, { useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import HomeHeaderComponent from 'screens/AppLayer/HomeScreen/components/Header';
import TopEvents from 'screens/AppLayer/HomeScreen/components/TopEvents';
import dispatch from 'utils/dispatch/dispatch';
import { getPromotionEvents } from 'state/events/operations/getPromotionEvents';
import { getWeekTopEvents } from 'state/events/operations/getWeekTopEvents';
import { useSelector } from 'react-redux';
import WeekTopUsers from 'screens/AppLayer/HomeScreen/components/WeekTopUsers';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { fetchAllBankAccounts } from 'state/bank/operations/fetchAllBankAccounts';

const HomeScreen = ({ navigation, route }) => {
  const { week_top_events, promotion_events } = useSelector(
    ({ events }) => events,
  );

  const insets = useSafeAreaInsets();
  const handleFocus = useCallback(() => {
    dispatch(getPromotionEvents());
    dispatch(getWeekTopEvents());
    dispatch(fetchAllBankAccounts());
    dispatch(
      fetchAllUsers({
        params: {
          page: 0,
          size: 100,
        },
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = navigation?.addListener('focus', handleFocus);

    return unsubscribe;
  }, [navigation]);
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top + normalize(16),
        backgroundColor: Colors.white,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: normalize(180) }}>
      {/* Header component*/}
      <HomeHeaderComponent />
      {/* Highlights component */}
      {/*<Highlights />*/}
      {/* WeekTopUsers component */}
      <WeekTopUsers />
      {/* Promotion component */}
      {/*{!isEmpty(promotion_events) ? <PromotionComponent /> : null}*/}
      {/* Top Events component */}
      <TopEvents />
    </ScrollView>
  );
};

export { HomeScreen };
