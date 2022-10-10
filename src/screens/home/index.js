import { View, Text, Button } from 'react-native'
import { useState, useEffect, Component } from 'react';
import * as Location from 'expo-location';
import React from 'react';
import MapView from 'react-native-maps';

function HomeScreen() {

  Location.requestBackgroundPermissionsAsync();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" />
      </View>
      <Text>Location: </Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
    </View>
  );
}
  

export default HomeScreen