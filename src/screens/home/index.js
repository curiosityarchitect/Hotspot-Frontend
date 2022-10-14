import { View, Text, StyleSheet } from 'react-native'
import { store } from '../../redux/store/store';
import MapView, { Marker } from 'react-native-maps';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setNearbyEvents } from '../../services/events.service';

const homeStyles = StyleSheet.create({
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

const createEventMarkers = (events) => {
  const markers = events.map((event, index) => {
    return <Marker
      key = {index}
      coordinate = {{
          longitude: event.location.coordinates[0],
          latitude: event.location.coordinates[1]
      }}
      title = { event.name }
    />
  });
  console.log(markers);
  return markers;
}

function MapScreen() {

  const dispatch = useDispatch();
  const location = useSelector(state => state.location);
  const events = useSelector(state => state.mapEvents)

  useEffect(() => {
    setNearbyEvents(location);
  }, [location])
  

  // render map if location has been fetched
  if (store.getState().location) {
    const currLongitude = store.getState().location.coords.longitude;
    const currLatitude = store.getState().location.coords.latitude;
    const mapRegion = {
      longitude: currLongitude,
      latitude: currLatitude,
      longitudeDelta: 0.01,
      latitudeDelta: 0.01
    };
    return ( 
      <View style={homeStyles.container}>
        <MapView 
          style={homeStyles.map} 
          initialRegion={mapRegion} 
          showsUserLocation={true}
          showsPointsOfInterest = {false}>
          {console.log(events)}
          { events.map((event, index) => {
            return <Marker
              key = {index}
              coordinate = {{
                  longitude: event.location.coordinates[0],
                  latitude: event.location.coordinates[1]
              }}
              title = { event.name }
            />
          }) }
        </MapView>
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