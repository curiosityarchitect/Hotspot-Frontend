import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';
import EventCard from './eventscreen-components/eventcard';
import CreateEventButton from '../eventCreation/create-event-button';

//test data - collapse for clarity
const events = [
  {
    uid: '1',
    name: "Architecture Appreciation Group",
    description: "For those who love architecture!",
    location: {name: "Venice, Italy",loc:  "Point",coordinates: [5,5]},
    creator: { username: "alexwu", dateCreated: '10/02/2022'},
    eventType: {scope: ["private"],groupEvent: true},
    capacity: 44,
    start: "10/02/2022",
    expiration: "10/15/2022",
    cover: require('./event-temp-assets/trevi-fountain.jpeg'),
  },
  {
    uid: '2',
    name: "5k Run for Abex",
    description: `Join us for our anual 5k in support of those who are developmentally disabled.
     For every kilometer ran, we will donate 1000 dollars`,
    location: {name: "West Lafayette, IN",loc:  "Point",coordinates: [2,-8]},
    creator: { username: "dave69", dateCreated: '10/02/2022'},
    eventType: {scope: ["public"],groupEvent: false},
    capacity: 0,
    start: "10/02/2022",
    expiration: "10/04/2022",
    cover: require('./event-temp-assets/21042301_G.jpeg'),
  },
  {
    uid: '3',
    name: "Week in the Mountains",
    description: "Outdoor lovers - spend a week in Mount Timpanogos!",
    location: {name: "Salt Lake City, UT",loc:  "Point",coordinates: [11,11]},
    creator: { username: "MountainMan", dateCreated: '10/10/2022'},
    eventType: {scope: ["public"],groupEvent: true},
    capacity: 200,
    start: "10/10/2022",
    expiration: "10/17/2022",
    cover:  require('./event-temp-assets/359168.jpeg'),
  },
  {
    uid: '4',
    name: "The Art of Meditation ",
    description: "Meditate with the best meditator in the world!!",
    location: {name: "Carmel, CA",loc:  "Point",coordinates: [222,222]},
    creator: { username: "Plompas", dateCreated: '10/11/2022'},
    eventType: {scope: ["private"],groupEvent: false},
    capacity: 10,
    start: "10/11/2022",
    expiration: "10/11/2022",
    cover:  require('./event-temp-assets/2395323.jpeg'),
  },
  {
    uid: '5',
    name: "Surf With Sharks",
    description: "",
    location: {name: "Big Sur, CA",loc:  "Point",coordinates: [225,225]},
    creator: { username: "davidb", dateCreated: '10/05/2022'},
    eventType: {scope: ["public"],groupEvent: false},
    capacity: 111,
    start: "10/05/2022",
    expiration: "10/06/2022",
    cover: require('./event-temp-assets/mcway-falls-big-sur-ca.jpeg'),
  },
]


const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#faf0e6',
  },
  CreateButtonStyle: {
    marginTop: 10,
  }
});

const EventScreen = () => {
  return(
    <View style={styles.container}>
        <FlatList 
          data={events} 
          renderItem={({item}) => {
            return (
              <EventCard info ={item}/>
            )
          }}
          keyExtractor={(events => events.uid)}
          showsVerticalScrollIndicator ={false}
        />

    </View>

  )
}


export default EventScreen

