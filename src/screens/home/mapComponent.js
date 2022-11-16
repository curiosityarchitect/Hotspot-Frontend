import { View, Text, StyleSheet, Pressable, Switch } from 'react-native'
import { ironbowPalette, startPoints } from './home.styles';
import MapView, { Heatmap, Marker } from 'react-native-maps';
import { connect, useSelector } from 'react-redux';
import { useState, useMemo, useRef, useEffect } from 'react';
import { regularMapStyle, heatMapStyle } from './home.styles';
import { setNearbyEvents } from '../../services/events.service';
import * as mapSettings from './map-settings';
import setFriendLocations from '../../services/friends.locations.service';

const mapStyles = StyleSheet.create({
  map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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

const createFriendMarkers = (friends) => (
  friends.map((friend, index) => {
    return <Marker
      key = {index}
      coordinate = {{
          longitude: friend.location.coordinates[0],
          latitude: friend.location.coordinates[1]
      }}
      title = { friend.name }
    />
  })
)

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

function MapComponent({heatMapOn}) {
  const location = useSelector(state => state.userLocation);
  const mapEvents = useSelector(state => state.mapEvents)
  const foregroundPerm = useSelector(state => state.foregroundPerm);
  const friendLocations = useSelector(state => state.friendLocations);

  const mapViewRef = useRef(null);
  const heatMap = useMemo(() => createHeatMap(mapEvents), [mapEvents]);
  const eventMarkers = useMemo(() => createEventMarkers(mapEvents), [mapEvents]);
  // const friendMarkers = useMemo(() => createFriendMarkers(friendLocations), [friendLocations])

  useEffect(() => {
    setNearbyEvents(location);
  }, [location]);

  // automatically fetch friend location on a 5 second timer
  useEffect(() => {
    // retrieve friend locations every 5 seconds
    const intervalId = setInterval(setFriendLocations, 5000);

    // clean up friend location fetching interval
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
        <MapView 
          ref={mapViewRef}
          style={mapStyles.map} 
          initialRegion={mapRegion} 
          showsUserLocation={!heatMapOn}
          customMapStyle={heatMapOn ? heatMapStyle : regularMapStyle}
          onRegionChangeComplete={handleRegionChange}>
          { heatMapOn ? null : eventMarkers }
          { heatMapOn ? heatMap : null }
        </MapView>
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
    userLocation: state.userLocation
  };
};

export default connect(mapStateToProps)(MapComponent);