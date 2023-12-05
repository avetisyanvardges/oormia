import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routNames } from 'constants/routNames';
import MainTab from '../TabNavigation/MainTab';
import EventList from 'screens/AppLayer/Events/List';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routNames.MAIN_TAB} component={MainTab} />
      <Stack.Screen name={routNames.EVENTS} component={EventList} />
    </Stack.Navigator>
  );
};

export default AppStack;
