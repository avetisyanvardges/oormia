import React from 'react';
import { routNames } from 'constants/routNames';
import LoginScreen from '../../screens/AuthLayer/Login';
import ForgotScreen from '../../screens/AuthLayer/Forgot';
import PreferencesScreen from 'screens/AuthLayer/Preferences';
import Home from 'screens/Home';
import Reset from 'screens/AuthLayer/Reset';
import SignUpUserData from 'screens/AuthLayer/SignUpUserData';
import OTPScreen from 'screens/AuthLayer/OTP';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={routNames.START} component={Home} />
      <Stack.Screen name={routNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routNames.FORGOT} component={ForgotScreen} />
      <Stack.Screen
        name={routNames.PREFERENCES}
        initialParams={{ values: {} }}
        component={PreferencesScreen}
      />
      <Stack.Screen name={routNames.OTP} component={OTPScreen} />
      <Stack.Screen name={routNames.RESET} component={Reset} />
      <Stack.Screen
        name={routNames.SIGN_UP_USER_DATA}
        component={SignUpUserData}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
