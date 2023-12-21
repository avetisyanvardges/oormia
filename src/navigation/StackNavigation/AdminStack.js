import React from 'react';
import { routNames } from 'constants/routNames';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import NotModeratedEvents from 'screens/Admin/NotModeratedEvents';
import CategoriesScreen from 'screens/Admin/Categories';

const Stack = createSharedElementStackNavigator();
const AdminStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routNames.ADMIN.NOT_MODERATED}
        component={NotModeratedEvents}
      />
      <Stack.Screen
        name={routNames.ADMIN.CATEGORIES}
        component={CategoriesScreen}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
