import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from 'services/NavigationService';
import {routNames} from 'constants/routNames';
import {checkInitialRoute} from 'utils/checkInitialRoute';
import AuthStack from './Stack/AuthStack';
import AppStack from './Stack/AppStack';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  const initialRoute = checkInitialRoute();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          gestureDirection: 'horizontal',
        }}
        initialRouteName={routNames.APP_LAYER}>
        <Stack.Screen name={routNames.AUTH_LAYER} component={AuthStack} />
        {/*<Stack.Screen name={routNames.APP_LAYER} component={AppStack} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
