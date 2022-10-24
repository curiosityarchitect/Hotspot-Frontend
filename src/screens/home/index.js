import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { store } from '../../redux/store/store';
import MapView, { Marker } from 'react-native-maps';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setNearbyEvents } from '../../services/events.service';
import CreateEventButton from '../eventCreation/create-event-button';
const homeStyles = StyleSheet.create({
  container: {
      position: 'absolute',
      flex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
  },
  map: {
      position: 'absolute',
      flex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: '10%',
    marginRight: '2%',


  },
});

function MapScreen({navigation}) {

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
        <TouchableOpacity style={homeStyles.buttonContainer} onPress={() => navigation.navigate('FriendRequests')}>
          <CreateEventButton />
        </TouchableOpacity>
      
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