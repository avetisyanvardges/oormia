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

const store = configureStore({
  reducer: {
    theme: theme,
    user: persistReducer(persistConfig, user),
    intl: intl,
    modal: modal,
    pictures: pictures,
    groups: groups,
    categories: categories,
    events: events,
  },
});

const persistor = persistStore(store);

export { store, persistor };
