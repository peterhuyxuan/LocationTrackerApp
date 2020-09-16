/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {GoogleSignin} from '@react-native-community/google-signin';

import App from './App';
import {name as appName} from '../app.json';

GoogleSignin.configure({
  webClientId:
    '69535211194-q2eteo098mbv7mo5d13rsienta0if6ka.apps.googleusercontent.com',
});

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
