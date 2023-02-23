import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routNames} from 'constants/routNames';
import MainTab from '../Tab/MainTab';

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
