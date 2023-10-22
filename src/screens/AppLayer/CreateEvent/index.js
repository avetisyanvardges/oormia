import React from 'react';
import { View } from 'react-native';
import { Colors } from 'assets/RootStyles';
import useContainer from 'screens/AppLayer/CreateEvent/hook';

const CreateEvent = ({ route, navigation }) => {
  const { insets, screens, screen } = useContainer({ route });
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {screens[screen] ? screens[screen] : null}
    </View>
  );
};

export { CreateEvent };
