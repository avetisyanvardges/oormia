/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './src/assets/locales/i18n';
import messaging from '@react-native-firebase/messaging';
import { initialize } from 'react-native-clarity';
import { deviceInfo } from 'assets/deviceInfo';

if (deviceInfo.android) {
  initialize('krei5iijka');
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
