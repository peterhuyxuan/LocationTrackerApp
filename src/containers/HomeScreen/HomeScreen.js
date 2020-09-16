import React from 'react';
import {BottomNavigation} from 'react-native-paper';

import FriendsPage from '../FriendsPage/FriendsPage';
import RoutePage from '../RoutePage/RoutePage';
import SettingsPage from '../SettingsPage/SettingsPage';

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'friends', title: 'Friends', icon: 'account-group'},
    {key: 'route', title: 'Route', icon: 'google-maps'},
    {key: 'settings', title: 'Settings', icon: 'cog'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    friends: FriendsPage,
    route: RoutePage,
    settings: SettingsPage,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeScreen;
