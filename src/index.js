/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {GoogleSignin} from '@react-native-community/google-signin';

import App from './App';
import {name as appName} from '../app.json';
import configureStore from './store/configureStore';

GoogleSignin.configure({
  webClientId:
    '69535211194-q2eteo098mbv7mo5d13rsienta0if6ka.apps.googleusercontent.com',
});

const store = configureStore();

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
