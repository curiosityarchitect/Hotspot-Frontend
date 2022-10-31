import { View, Text, StyleSheet, Pressable, Switch } from 'react-native'
import { ironbowPalette, startPoints } from './home.styles';
import MapView, { Heatmap, Marker } from 'react-native-maps';
import { connect, useSelector } from 'react-redux';
import { useState, useMemo, useRef, useEffect } from 'react';
import { regularMapStyle, heatMapStyle } from './home.styles';
import { setNearbyEvents } from '../../services/events.service';
import * as mapSettings from './map-settings';

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
  heatMapSwitch: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: '10%',
    marginRight: '2%',
  }
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
  const location = useSelector(state => state.location);
  const mapEvents = useSelector(state => state.mapEvents)
  const foregroundPerm = useSelector(state => state.foregroundPerm);

  const mapViewRef = useRef(null);
  const [heatMapOn, toggleHeatMap] = useState(false);
  const heatMap = useMemo(() => createHeatMap(mapEvents), [mapEvents]);
  const eventMarkers = useMemo(() => createEventMarkers(mapEvents), [mapEvents]);

  useEffect(() => {
    setNearbyEvents(location);
  }, [location]);

  const toggleSwitch = () => toggleHeatMap(heatMapOn => !heatMapOn);
  const handleRegionChange = (region, isGesture={isGesture: true}) => {
    // only adjust mapview if region change was due to user input
    if (!isGesture.isGesture)
      return;

    const newRegion = {
      longitude: region.longitude,
      latitude: region.latitude,
      longitudeDelta: region.longitudeDelta,
      latitudeDelta: region.latitudeDelta
    }
      
    // enforce maximum zoom level
    if (region.latitudeDelta > mapSettings.maxDelta) {
      newRegion.longitudeDelta = 0;
      newRegion.latitudeDelta = mapSettings.maxDelta;
    }

    const maxLeft = location.coords.longitude - mapSettings.maxDelta / 2;
    const maxRight = location.coords.longitude + mapSettings.maxDelta / 2;
    const maxTop = location.coords.latitude - mapSettings.maxDelta / 2;
    const maxBottom = location.coords.latitude + mapSettings.maxDelta / 2;
    const currLeft = region.longitude - newRegion.longitudeDelta / 2;
    const currRight = region.longitude + newRegion.longitudeDelta / 2;
    const currTop = region.latitude - newRegion.latitudeDelta / 2;
    const currBottom = region.latitude + newRegion.latitudeDelta / 2;

    // enforce camera movement restrictions
    if (currLeft < maxLeft) 
      newRegion.longitude = region.longitude + maxLeft - currLeft;
    if (currRight > maxRight) 
      newRegion.longitude = region.longitude + maxRight - currRight;
    if (currTop < maxTop) 
      newRegion.latitude = region.latitude + maxTop - currTop;
    if (currBottom > maxBottom) 
      newRegion.latitude = region.latitude + maxBottom - currBottom;

    if (newRegion.longitude       != region.longitude       || 
        newRegion.latitude        != region.latitude        ||
        newRegion.longitudeDelta  != region.longitudeDelta  ||
        newRegion.latitudeDelta   != region.latitudeDelta) {
      mapViewRef.current?.animateToRegion({
        longitude: newRegion.longitude,
        latitude: newRegion.latitude,
        longitudeDelta: newRegion.longitudeDelta,
        latitudeDelta: newRegion.latitudeDelta
      });
    }
  }

  // do not allow users to use map if their location is not tracked
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
      longitudeDelta: 0.005,
      latitudeDelta: 0.005
    };

    return ( 
      <View style={homeStyles.container}>
        <MapView 
          ref={mapViewRef}
          style={homeStyles.map} 
          initialRegion={mapRegion} 
          showsUserLocation={!heatMapOn}
          customMapStyle={heatMapOn ? heatMapStyle : regularMapStyle}
          onRegionChangeComplete={handleRegionChange}>
          { heatMapOn ? null : eventMarkers }
          { heatMapOn ? heatMap : null }
        </MapView>
        <Switch
          onValueChange={toggleSwitch}
          value={heatMapOn}
          style={homeStyles.heatMapSwitch}
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
  return { 
    location: state.location,
    hasLocation: state.hasLocation
  };
};

export default connect(mapStateToProps)(MapScreen);