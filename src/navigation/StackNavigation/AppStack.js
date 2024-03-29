import React from 'react';
import { routNames } from 'constants/routNames';
import MainTab from '../TabNavigation/MainTab';
import EventList from 'screens/AppLayer/Events/List';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import WebViewScreen from 'screens/AppLayer/WebView';
import AddFreeDays from 'screens/AppLayer/Profile/AddFreeDays';
import TicketDetails from 'screens/AppLayer/Tickets/Details';
import NotificationScreen from 'screens/AppLayer/Notifications';

const Stack = createSharedElementStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routNames.MAIN_TAB} component={MainTab} />
      <Stack.Screen name={routNames.EVENTS} component={EventList} />
      <Stack.Screen name={routNames.WEB_VIEW} component={WebViewScreen} />
      <Stack.Screen
        name={routNames.FREE_DAYS_CALENDAR}
        component={AddFreeDays}
      />
      <Stack.Screen
        name={routNames.NOTIFICATIONS}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={routNames.TICKET_DETAILS}
        component={TicketDetails}
        initialParams={{ id: 0, event: 'unknown' }}
        sharedElements={(route, otherRoute, showing) => {
          const { event } = route.params;
          return [
            {
              id: `item.${event.id}.photo`,
              animation: 'move',
              resize: 'clip',
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
