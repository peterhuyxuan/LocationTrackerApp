import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Button, StyleSheet} from 'react-native';

import {signOut} from '../../actions/auth';

const SettingsPage = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={() => dispatch(signOut())} />
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

export default SettingsPage;
