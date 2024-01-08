import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/main';
import { persistor, store } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
