import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{

      }}
    />
  );
};

export default AppStack;
