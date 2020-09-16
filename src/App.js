/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import MainNavigator from './containers/MainNavigator/MainNavigator';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import SignInScreen from './containers/SignInScreen/SignInScreen';

const App: () => React$Node = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(u) {
    setUser(u);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return <SignInScreen />;
  }

  return <HomeScreen />;
};

export default App;
