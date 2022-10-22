import { View, Text, StyleSheet, Pressable, Switch } from 'react-native'
import { ironbowPalette, startPoints } from './home.styles';
import MapView, { Heatmap, Marker } from 'react-native-maps';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { regularMapStyle, heatMapStyle } from './home.styles';
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

const createEventMarkers = (events) => (
  events.map((event, index) => {
    return <Marker
      key = {index}
      coordinate = {{
          longitude: event.location.coordinates[0],
          latitude: event.location.coordinates[1]
      }}
      title = { event.name }
    />
  })
);

const createHeatMap = (events) => {
  if (events.length == 0)
    return;

  const points = events.map((event) => {
    return {
      longitude: event.location.coordinates[0],
      latitude: event.location.coordinates[1],
      weight: event.numAttendees
    };
  });

  const gradientConfig = {
    colors: ironbowPalette,
    startPoints: startPoints,
    colorMapSize: ironbowPalette.length
  }

  return <Heatmap points={points} radius={40} gradient={gradientConfig}/>
};

function MapScreen() {
  const dispatch = useDispatch();
  const [heatMapOn, toggleHeatMap] = useState(false);
  const toggleSwitch = () => toggleHeatMap(heatMapOn => !heatMapOn);

  const location = useSelector(state => state.location);
  const events = useSelector(state => state.mapEvents);
  const foregroundPerm = useSelector(state => state.foregroundPerm);

  if (!foregroundPerm) {
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Allow location permissions to access map functionality! </Text>
      </View>
    );
  }

  // render map if location has been fetched
  if (location) {
    const currLongitude = location.coords.longitude;
    const currLatitude = location.coords.latitude;
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
          showsUserLocation={!heatMapOn}
          customMapStyle={heatMapOn ? heatMapStyle : regularMapStyle}>
          { heatMapOn ? <View></View> : createEventMarkers(events) }
          { heatMapOn ? createHeatMap(events) : <View></View> }
        </MapView>
        <Switch
          onValueChange={toggleSwitch}
          value={heatMapOn}
        />
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
  setNearbyEvents(state.location);
  return { 
    location: state.location,
    hasLocation: state.hasLocation
  };
};

export default connect(mapStateToProps)(MapScreen);