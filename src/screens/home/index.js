import { View, Text } from 'react-native'
import { store } from '../../redux/store/store';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import styles from './home.styles';
import { useState } from 'react';
import { getNearbyEvents, setNearbyEvents } from '../../services/events.service';

function MapScreen() {

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
        <MapView 
          style={styles.map} 
          initialRegion={mapRegion} 
          showsUserLocation={true}/>
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

const mapStateToProps = (state) => {
  return { 
    location: state.location,
    hasLocation: state.hasLocation
  };
};

export default connect(mapStateToProps)(MapScreen);