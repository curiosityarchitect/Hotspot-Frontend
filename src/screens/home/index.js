import { View, Text, Button } from 'react-native'
import { useState, useEffect, Component } from 'react';
import * as Location from 'expo-location';
import React from 'react';
import { store } from '../../redux/store/store';
import MapView from 'react-native-maps';

function HomeScreen() {
  const [currLocation, setLocation] = useState({"coords": {"longitude": 0, "latitude": 0}});
  

  const beginTracking = async () => {
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      location => {
        setLocation(location)
      }
    )
  };

  useEffect(() => {
    beginTracking();
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" />
      </View>
      <Text>Location: {currLocation.coords.longitude}, {currLocation.coords.latitude} </Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
    </View>
  );
}
  

export default HomeScreen