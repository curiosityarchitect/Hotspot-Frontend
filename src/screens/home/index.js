import { View, Text, StyleSheet, Pressable, TouchableOpacity, Switch } from 'react-native'
import { connect, useSelector } from 'react-redux';
import { useState, useMemo, useRef, useEffect } from 'react';
import CreateEventButton from '../eventCreation/create-event-button';
import MapComponent from './mapComponent'
import { Icon } from 'react-native-elements';

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
  buttonContainer:{
      flex: 1,
      marginStart: '83%',
      marginTop: '20%',
    },
  androidButton: {
    width: '70%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#ffffff',
  },
  iosButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10,
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:20,
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
          onPress={()=>navigation.navigate("UserSearch")} 
          style={homeStyles.iosButton}
        >
          <Icon name={"search"}  size={20} color="#D2B48C" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleSwitch}
          style={homeStyles.iosButton}
        >
          <Icon name={"device-thermostat"}  size={20} color="#D2B48C" />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateEvent")}
          style={homeStyles.iosButton}
        >
          <Icon name={"add"}  size={20} color="#D2B48C" />
        </TouchableOpacity>
      </View>
    </View>
  );
  
}

export default HomeScreen;