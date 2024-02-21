import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Main from './src/main';
import { persistor, store } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';
import { Settings } from 'react-native-fbsdk-next';

Settings.setAppID('925987549179819');

const App = () => {
  const onMountHandler = async () => {
    const initialNotification = await messaging().getInitialNotification();

    if (initialNotification) {
      console.log(11111111, initialNotification);
    }
  };

  useEffect(() => {
    onMountHandler();

    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      // Extract the necessary data from remoteMessage to determine the screen to navigate to
      console.log(remoteMessage, 'onNotificationOpenedApp');
    });

    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
