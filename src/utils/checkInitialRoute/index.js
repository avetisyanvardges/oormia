import { routNames } from '../../constants/routNames';
import { store } from '../../state/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';

function checkInitialRoute() {
  const {
    user: { token },
  } = store.getState();
  AsyncStorage.getItem('lang').then(lang => {
    if (lang) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage('en');
    }
  });
  if (token) {
    return routNames.APP_LAYER;
  } else {
    return routNames.AUTH_LAYER;
  }
}

export { checkInitialRoute };
