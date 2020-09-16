import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Button, StyleSheet} from 'react-native';

import {signIn} from '../../actions/auth';

const SignInScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={() => dispatch(signIn())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignInScreen;
