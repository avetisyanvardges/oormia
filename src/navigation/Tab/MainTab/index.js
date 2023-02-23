import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';
import TabBar from './TabBar/TabBar';
import {routNames} from 'constants/routNames';
import {Trip} from 'screens/AppLayer/Trip';
import {CreateEvent} from 'screens/AppLayer/Create';
import {Groups} from 'screens/AppLayer/Groups';
import Profile from 'screens/AppLayer/Profile';
import {HomeScreen} from 'screens/AppLayer/HomeScreen';

function MainTab() {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={routNames.TRIP} component={Trip} />
      <Tab.Screen name={routNames.HOME} component={HomeScreen} />
      <Tab.Screen name={routNames.CREATE_EVENT} component={CreateEvent} />
      <Tab.Screen name={routNames.GROUPS} component={Groups} />
      <Tab.Screen name={routNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default MainTab;
