import { View, Text, Button } from 'react-native'
import { useState, useEffect, Component } from 'react';
import * as Location from 'expo-location';
import React from 'react';
import { store } from '../../redux/store/store';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

function HomeScreen() {
  if (store.getState().hasLocation) {
    console.log(store.getState());
    const longitude = store.getState().location.coords.longitude;
    const latitude = store.getState().location.coords.latitude;
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Text>Location: {longitude}, {latitude} </Text>
      </View>
    );
  }
  else {
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Getting location... </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ 
  location: state.location.location
});

connect(mapStateToProps)(HomeScreen);

export default HomeScreen;