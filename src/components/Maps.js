import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions';
import GetLocation from 'react-native-get-location';

// import flagBlueImg from '../images/flag-blue.png';

let Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

let Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const origin = {latitude: 0, longitude: 0};
const destination = {latitude: -33.9246, longitude: 151.2277};

const GOOGLE_MAPS_APIKEY = 'AIzaSyCuj1j7pj60iC1QP9rl__2HFl6DfLreslQ';

GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 15000,
})
  .then((location) => {
    origin.latitude = location.latitude;
    origin.longitude = location.longitude;
    console.log(location);
  })
  .catch((error) => {
    const {code, message} = error;
    console.warn(code, message);
  });

class Maps extends Component {
  constructor() {
    super();
  }

  handleGetDirections = () => {
    const data = {
      destination,
      params: [
        {
          key: 'dirflg',
          value: 'd',
        },
      ],
    };

    getDirections(data);
  };

  pressed(e) {
    console.log('pressed');
  }

  render() {
    return (
      <Container>
        <Map
          initialRegion={{
            latitude: destination.latitude,
            longitude: destination.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker coordinate={destination}>
            <MapView.Callout
              onPress={() => {
                console.log('Press to Get Direction');
                this.handleGetDirections();
              }}>
              <Text>Press to Get Direction</Text>
            </MapView.Callout>
          </MapView.Marker>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </Map>
      </Container>
    );
  }
}

export default Maps;
