import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AppStack;
