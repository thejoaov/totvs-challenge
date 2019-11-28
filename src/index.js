import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import * as Sentry from 'sentry-expo';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';
import App from '~/App';

Sentry.init({
  dsn: 'https://7729bbcd0694464ca663c53ab309c3ca@sentry.io/1836640',
  enableNative: false,
});

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#000000" barStyle="default" />
        <App />
      </PersistGate>
    </Provider>
  );
}
