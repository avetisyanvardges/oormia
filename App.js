import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/main';
import { IntlProvider } from 'react-intl-redux';
import { persistor, store } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider>
          <Main />
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
