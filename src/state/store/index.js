import { configureStore } from '@reduxjs/toolkit';
import theme from '../theme';
import user from '../user';
import intl from '../Intl';
import modal from '../modal';
import groups from '../groups';
import pictures from '../picture';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from 'constants/reduxPersist';
import categories from '../categories';
import events from '../events';
import toast from '../snackbars';
import notification from '../notifications';
import HttpClient from 'services/HttpClient';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
const store = configureStore({
  reducer: {
    theme,
    user: persistReducer(persistConfig, user),
    intl,
    modal,
    pictures,
    groups,
    categories,
    events,
    toast,
    notification,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: HttpClient,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
