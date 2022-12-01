import React,{useState, useEffect} from 'react';
import {View, Text, FlatList,StyleSheet,Image,Dimensions,TouchableOpacity,ActivityIndicator, Pressable} from 'react-native';
import EventLabels from '../tab-components/event-labels';
import RsvpButton from '../event-rsvp/rsvp-button';
import axios from 'axios';
import { backendUrl } from '../../../../services/const';
import { useSelector } from 'react-redux';
import currUserReducer from '../../../../redux/reducers/currUser.reducer';



const EventDetailsPage = ({route,navigation}) => {
  const userid = useSelector(state => state.currUser.userid);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const current_user = 'alexwu';
  const {eventid} = route.params;
  const [event, setEvent] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`${backendUrl}/events/${eventid}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        } 
      }).then((response) => {
        setEvent(response.data);
      }).catch ((err) => {
        console.log(err)
      }),
      
      axios.get(`${backendUrl}/events/${eventid}/tags`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        } 
      }).then((response) => {
        setTags(response.data);
      }).catch ((err) => {
        console.log(err)
      }),

      axios.get(`${backendUrl}/events/${eventid}/attendees`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        } 
      }).then((response) => {
        if(response.data.filter((attendee) => attendee._id === userid).length == 0){
          setDisabled(false)
        }
        else{
          setDisabled(true)
        }
      }).catch ((err) => {
        console.log(err)
      })
    ]).then(() => setLoading(false));
  },[]);

  if (loading) {
    return <ActivityIndicator color="#D2B48C" />
  }

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator color="#D2B48C" /> : (
      <View style={styles.header}>
        <Image 
          style={styles.coverImage} 
          source={require('./mcway-falls-big-sur-ca.jpeg')}
        />
        <View style={styles.headerContent}>
          <Text style={styles.nameStyle}>{event.name}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionStyle}>{event.description}</Text>
          </View>
          <View style={styles.eventIdentificationContainer}>
            <EventLabels name='location-outline' />
            <Text style={styles.locationTextStyle}>{event.address}</Text>
            <EventLabels  name='person-circle-outline' />
            <Text style={styles.creatorTextStyle}>{event.creator.username}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeTextStyle}>start:</Text>
            <EventLabels name='calendar-outline' desc={event.startDate.substring(0,10)} />
            <Text style={styles.timeTextStyle}>end:</Text>
            <EventLabels name='calendar-outline' desc={event.endDate.substring(0,10)} />
          </View>
          <View style={styles.tagContainer}>
            <FlatList
              data={tags}
              keyExtractor={(item) => item._id}
              renderItem={({item}) => (
              <TouchableOpacity onPress={()=>navigation.navigate("TagDetails",{item:item,event:event})}>
                 <EventLabels name='pricetag' desc={item.description} />
              </TouchableOpacity>  
              )}
            />
          </View>
          <View style={styles.capacityContainer}>
          <EventLabels name='people-circle-outline' />
          <Text style={styles.capacityTextStyle}>{'attending: ' + event.numAttendees + '/' + event.capacity}</Text>
        </View>
        <View style={styles.rsvpContainer}>
          <TouchableOpacity disabled = {disabled} onPress={()=> {
            axios.post(`${backendUrl}/events/${event._id}/attendees`, 
            {
                username: current_user,
                numAttendees: events.numAttendees
            },
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
               // console.log(response);
            })
            .catch((err) => {console.log(err)});            
            navigation.navigate("RsvpScreen",
            {
              events: event,
          
            })
          }}>
              <RsvpButton/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
              <Text style={styles.loginText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        )}
    </View>

  )

}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
  },
  coverImage: { 
    width: '100%',
    height: '40%',
  },
  header: {
    flex: 1
  },
  nameStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingLeft: 3,
  },
  descriptionContainer: {
    width: '80%',
    marginStart: '1%',
  },
  descriptionStyle: {
    fontSize: 15,
    fontStyle: 'italic',
    paddingTop: 10,
    color: '#404040',
    paddingLeft: 3,
  },
  //container for location and creator details
  eventIdentificationContainer:{
    flexDirection: 'row',
    paddingTop: 6,
    paddingLeft: 3,
  },
  //location
  locationTextStyle: {
    fontSize: 16,
    fontStyle: 'bold',
    paddingTop: 11,
    paddingLeft: 3,
    paddingRight: 10,
  },
  locationIconStyle: {
    fontSize: 20,
  },
  //creator
  creatorTextStyle: {
      fontSize: 16,
      fontStyle: 'bold',
      paddingTop: 11,
  },
  //date
  timeContainer:{
    paddingTop: 18,
    height: 0.3*deviceWidth,
    alignContent: 'center',
    padding: 11,
    paddingBottom: 2,
  },
  timeTextStyle:{
    fontSize: 13,
    color: '#696969',
  },
  //capacity
  capacityContainer:{
    start:deviceWidth*0.6,
    flexDirection: 'row',
  },
  capacityTextStyle: {
    fontSize: 15,
    fontStyle: 'italic',
    padding: 3,
  },
  //
  rsvpContainer: {
    start: deviceWidth/1.55,
  },
  backButton: {
    width: '30%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.333,
  },
  tagContainer: {
    flexDirection: 'column',
    paddingTop: 22,
    height: 0.3*deviceWidth,
    alignContent: 'center',
    padding: 11,
    paddingBottom: 2,
  }

  
});


export default EventDetailsPage;