import React from 'react';
import {Provider} from 'react-redux';
import Main from './src/Main';
import {IntlProvider} from 'react-intl-redux';
import {store} from 'state/store';

const App = () => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Main />
      </IntlProvider>
    </Provider>
  );
};

export default App;
