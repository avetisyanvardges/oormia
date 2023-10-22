import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routNames } from 'constants/routNames';
import MainTab from '../TabNavigation/MainTab';
import EventsScreen from 'screens/AppLayer/Events';
import { fullScreen } from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';
import { TransitionPresets } from '@react-navigation/stack';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routNames.MAIN_TAB} component={MainTab} />
    </Stack.Navigator>
  );
};

export default AppStack;
