import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routNames} from '../../constants/routNames';
import LoginScreen from '../../screens/AuthLayer/Login';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routNames.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
