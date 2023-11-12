import React, { useEffect, useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import Highlights from './components/Highlights';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import HomeHeaderComponent from 'screens/AppLayer/HomeScreen/components/Header';
import PromotionComponent from 'screens/AppLayer/HomeScreen/components/Promotion';
import TopEvents from 'screens/AppLayer/HomeScreen/components/TopEvents';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import dispatch from 'utils/dispatch/dispatch';
import { getAllEvents } from 'state/events/operations/getAllEvents';

const HomeScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top + normalize(16),
        backgroundColor: Colors.white,
      }}
      contentContainerStyle={{ paddingBottom: normalize(30) }}>
      {/* Header component*/}
      <HomeHeaderComponent />
      {/* Highlights component */}
      <Highlights />
      {/* Promotion component */}
      <PromotionComponent />
      {/* Top Events component */}
      <TopEvents />
    </ScrollView>
  );
};

export { HomeScreen };
