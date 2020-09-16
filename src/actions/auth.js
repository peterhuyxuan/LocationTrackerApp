import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

import {AUTH_SIGN_IN, AUTH_SIGN_OUT} from '../constants/auth';

export const signIn = () => {
  return async (dispatch) => {
    // Get the users ID token
    const userInfo = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(() =>
        dispatch({
          type: AUTH_SIGN_IN,
          user: userInfo,
        }),
      );
  };
};

export const signOut = () => {
  return (dispatch) => {
    auth()
      .signOut()
      .finally(() =>
        dispatch({
          type: AUTH_SIGN_OUT,
        }),
      );
  };
};
