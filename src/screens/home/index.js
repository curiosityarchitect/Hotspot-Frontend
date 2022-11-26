import { View, Text, StyleSheet, Pressable, TouchableOpacity, Switch } from 'react-native'
import { ironbowPalette, startPoints } from './home.styles';
import MapView, { Heatmap, Marker } from 'react-native-maps';
import { connect, useSelector } from 'react-redux';
import { useState, useMemo, useRef, useEffect } from 'react';
import { regularMapStyle, heatMapStyle } from './home.styles';
import { setNearbyEvents } from '../../services/events.service';
import * as mapSettings from './map-settings';
import CreateEventButton from '../eventCreation/create-event-button';
import MapComponent from './mapComponent'
import { Icon } from 'react-native-elements';


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
  },

  buttonContainer:{
      flex: 1,
      position: 'flex-end', 
      marginStart: '83%',
      marginTop: '20%',
    },
    button: {
      width: '70%',
      borderRadius: 5,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      backgroundColor: '#ffffff',
    }
  
});

function HomeScreen({navigation}) {
  const [heatMapOn, toggleHeatMap] = useState(false);

  const toggleSwitch = () => toggleHeatMap(heatMapOn => !heatMapOn);

  return ( 
    <View style={homeStyles.container}>
      <MapComponent heatMapOn={heatMapOn}/>

      <View style={homeStyles.buttonContainer}>
        <TouchableOpacity
          onPress={toggleSwitch}
          style={homeStyles.button}
        >
          <Icon name={"device-thermostat"}  size={20} color="#7a009d" />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateEvent")}
          style={homeStyles.button}
        >
          <Icon name={"add"}  size={20} color="#7a009d" />
        </TouchableOpacity>
      </View>
    </View>
  );
  
}

const mapStateToProps = (state) => {
  return { 
    location: state.location
  };
};

  
export default connect(mapStateToProps)(HomeScreen);