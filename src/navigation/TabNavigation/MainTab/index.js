import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import TabBar from './TabBar/TabBar';
import { routNames } from 'constants/routNames';
import { CreateEvent } from 'screens/AppLayer/Events/Create';
import Profile from 'screens/AppLayer/Profile';
import { HomeScreen } from 'screens/AppLayer/HomeScreen';
import MapScreen from 'screens/AppLayer/MapScreen';
import { TicketsScreen } from 'screens/AppLayer/Tickets';

function MainTab() {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={routNames.HOME}>
      <Tab.Screen name={routNames.HOME} component={HomeScreen} />
      <Tab.Screen name={routNames.MAP} component={MapScreen} />
      <Tab.Screen name={routNames.CREATE_EVENT} component={CreateEvent} />
      <Tab.Screen name={routNames.TICKETS} component={TicketsScreen} />
      <Tab.Screen name={routNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default MainTab;
