import React, {Component, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import EventCard from './eventscreen-components/tab-components/eventcard';
/* import { getEvents } from '../../services/events.service'; */
import axios from 'axios';
import { backendUrl } from '../../services/const';
import {Icon} from 'react-native-elements';

/* const events = [
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
    description: "Join us for our anual 5k in support of those who are developmentally disabled. For every kilometer ran, we will donate 1000 dollars",
    location: {name: "West Lafayette, IN",loc:  "Point",coordinates: [2,-8]},
    creator: { username: "dave69", dateCreated: '10/02/2022'},
    eventType: {scope: ["public"],groupEvent: false},
    capacity: 10,
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
 */
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
//mock cover

const EventScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(true);
  const [events, setEvents] = useState([]);
  const current_user = 'alexwu';
  let tags = [];
   useEffect(() => {
      axios.get(`${backendUrl}/events`, 
      {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          }
      }).then((response) => {
        setEvents(response.data);
      })
        .catch ((err) => {console.log(err)})
        .finally(() => setRefreshing(false));
  }, []); 
  
 
  const wait = (timeout) => { 
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1111).then(() => setRefreshing(false));
  }, []);

  return(
    <View style={styles.container}>
    
      <TouchableOpacity onPress={()=>navigation.navigate("EventSearch")} style={styles.CreateButtonStyle}>
          <Icon name={"search"}  size={30} color="#000000" />
      </TouchableOpacity>
      {refreshing ? <ActivityIndicator color="#D2B48C" /> : (
        <FlatList
          data={events}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() =>
              navigation.navigate('EventDetails', 
              {
                eventid: item._id
              })
            }>
              <EventCard info = {item}/>
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
      </View>

)}

export default EventScreen