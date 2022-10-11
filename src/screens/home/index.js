import { StyleSheet, View, Text, Button } from 'react-native'
import { useState, useEffect, Component } from 'react';
import * as Location from 'expo-location';
import React from 'react';
import { store } from '../../redux/store/store';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

function HomeScreen() {
  // render map if location has been fetched
  if (store.getState().hasLocation) {
    const currLongitude = store.getState().location.coords.longitude;
    const currLatitude = store.getState().location.coords.latitude;
    const mapRegion = {
      longitude: currLongitude,
      latitude: currLatitude,
      longitudeDelta: 0.0072,
      latitudeDelta: 0.0072
    };
    return ( 
      <View style={styles.container}>
        <MapView style={styles.map} region={mapRegion} />
      </View>
    );
  }
  // otherwise show loading message
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