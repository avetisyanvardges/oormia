import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {navigationRef} from 'services/NavigationService';
import {routNames} from 'constants/routNames';
import {checkInitialRoute} from 'utils/checkInitialRoute';
import AuthStack from './StackNavigation/AuthStack';
import AppStack from './StackNavigation/AppStack';
import Settings from 'screens/AppLayer/Settings';
import {fullScreen} from 'assets/RootStyles';
import {deviceInfo} from 'assets/deviceInfo';
import ChooseLocation from 'screens/AppLayer/ChooseLocation';
import EventsScreen from 'screens/AppLayer/Events';

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
        initialRouteName={initialRoute}>
        <Stack.Screen name={routNames.AUTH_LAYER} component={AuthStack} />
        <Stack.Screen name={routNames.APP_LAYER} component={AppStack} />
        <Stack.Screen
          name={routNames.SETTINGS}
          component={Settings}
          options={{
            presentation: 'modal',
            cardStyle: {backgroundColor: 'transparent'},
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: true,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.CHOOSE_LOCATION}
          component={ChooseLocation}
          options={{
            presentation: 'modal',
            cardStyle: {backgroundColor: 'transparent'},
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: true,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.EVENTS}
          component={EventsScreen}
          options={{
            presentation: 'modal',
            cardStyle: {backgroundColor: 'transparent'},
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: true,
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
