import { View, Text, StyleSheet, Pressable, Switch } from 'react-native'
import { connect, useSelector } from 'react-redux';
import { useState, useMemo, useRef, useEffect } from 'react';
import MapComponent from './mapComponent'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  buttonContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    padding: 10,
    marginTop: '7%',
    marginRight: '7%',
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
            onPress={()=>navigation.navigate("UserSearch")} 
            style={homeStyles.button}
          >
            <Icon name={"search"}  size={20} color="#7a009d" />
          </TouchableOpacity>
          
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
    location: state.location
  };
};

export default connect(mapStateToProps)(HomeScreen);