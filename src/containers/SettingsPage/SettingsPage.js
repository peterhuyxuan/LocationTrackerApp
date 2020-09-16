import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign Out"
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }
      />
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
