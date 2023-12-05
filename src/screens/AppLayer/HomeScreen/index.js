import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import Highlights from './components/Highlights';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import HomeHeaderComponent from 'screens/AppLayer/HomeScreen/components/Header';
import PromotionComponent from 'screens/AppLayer/HomeScreen/components/Promotion';
import TopEvents from 'screens/AppLayer/HomeScreen/components/TopEvents';
import dispatch from 'utils/dispatch/dispatch';
import { getPromotionEvents } from 'state/events/operations/getPromotionEvents';
import { getWeekTopEvents } from 'state/events/operations/getWeekTopEvents';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { getAllEvents } from 'state/events/operations/getAllEvents';

const HomeScreen = ({ navigation, route }) => {
  const { week_top_events, promotion_events } = useSelector(
    ({ events }) => events,
  );

  const insets = useSafeAreaInsets();
  const handleFocus = useCallback(() => {
    dispatch(getPromotionEvents());
    dispatch(getWeekTopEvents());
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
      <Highlights />

      {/* Promotion component */}
      {!isEmpty(promotion_events) ? <PromotionComponent /> : null}
      {/* Top Events component */}
      {!isEmpty(week_top_events) ? <TopEvents /> : null}
    </ScrollView>
  );
};

export { HomeScreen };
