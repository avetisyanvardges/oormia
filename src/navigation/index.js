import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { navigationRef } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { checkInitialRoute } from 'utils/checkInitialRoute';
import AuthStack from './StackNavigation/AuthStack';
import AppStack from './StackNavigation/AppStack';
import Settings from 'screens/AppLayer/Settings';
import { fullScreen } from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';
import ChooseLocation from 'screens/AppLayer/Events/ChooseLocation';
import CreateGroup from 'screens/AppLayer/Groups/Create';
import EventDetail from 'screens/AppLayer/Events/Details';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import MoreState from 'screens/AppLayer/Events/MoreState';
import BuyTicketScreen from 'screens/AppLayer/Events/BuyTicket';
import FiltersScreen from 'screens/AppLayer/MapScreen/Filters';
import EditProfile from 'screens/AppLayer/EditProfile';
import InviteMembersScreen from 'screens/AppLayer/Groups/InviteMembers';
import AdminSettings from 'screens/AppLayer/AdminSettings';
import AdminStack from 'navigation/StackNavigation/AdminStack';
import LanguageScreen from 'screens/LanguageScreen';

const Stack = createSharedElementStackNavigator();
const StackNavigation = () => {
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
        <Stack.Screen name={routNames.ADMIN_LAYER} component={AdminStack} />
        <Stack.Screen
          name={routNames.SETTINGS}
          component={Settings}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: true,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.ADMIN_SETTINGS}
          component={AdminSettings}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
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
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: true,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.CREATE_GROUP}
          component={CreateGroup}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.INVITE_MEMBERS}
          component={InviteMembersScreen}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: true,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.EVENT_DETAIL}
          component={EventDetail}
          initialParams={{ id: 0, event: 'unknown' }}
          sharedElements={(route, otherRoute, showing) => {
            const { event } = route.params;
            console.log(otherRoute, showing);
            if (
              otherRoute?.route?.name === routNames.MORE_STATE ||
              otherRoute?.route?.name === routNames.MAP ||
              otherRoute?.route?.name === routNames.BUY_TICKET
            ) {
              return;
            }

            return [
              {
                id: `item.${event.id}.photo`,
                animation: 'move',
                resize: 'clip',
              },
              {
                id: `item.${event.id}.info`,
                animation: 'fade-out',
                resize: 'clip',
              },
            ];
          }}
        />
        <Stack.Screen
          name={routNames.MORE_STATE}
          component={MoreState}
          initialParams={{ event: 'unknown' }}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.BUY_TICKET}
          component={BuyTicketScreen}
          initialParams={{ event: 'unknown' }}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.FILTERS}
          component={FiltersScreen}
          initialParams={{ event: 'unknown' }}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.EDIT_PROFILE}
          component={EditProfile}
          initialParams={{ event: 'unknown' }}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            gestureResponseDistance: fullScreen.height,
            ...(deviceInfo.android && TransitionPresets.ModalPresentationIOS),
            gestureEnabled: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name={routNames.LANGUAGE}
          component={LanguageScreen}
          options={{
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
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
