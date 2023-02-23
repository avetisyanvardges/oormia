import {configureStore} from '@reduxjs/toolkit';
import theme from '../theme';
import user from '../user';
import intl from '../Intl';

export const store = configureStore({
  reducer: {
    theme: theme,
    user: user,
    intl: intl,
  },
});
