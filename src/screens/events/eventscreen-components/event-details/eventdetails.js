import React,{useState, useEffect} from 'react';
import {View, Text, FlatList,StyleSheet,Image,Dimensions,TouchableOpacity,ActivityIndicator, Pressable} from 'react-native';
import EventLabels from '../tab-components/event-labels';
import RsvpButton from '../event-rsvp/rsvp-button';
import UnRsvp from '../event-rsvp/unattend';
import axios from 'axios';
import { backendUrl } from '../../../../services/const';
import { useSelector } from 'react-redux';
import { store } from '../../../../redux/store/store';


const EventDetailsPage = ({route,navigation}) => {
  const username = store.getState().currUser.username;
  const [rsvp , setRsvp] = useState(true);
  const [attendee, setAttendee] = useState(0);
  const userid = useSelector(state => state.currUser.userid);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
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
      }),

      axios.get(`${backendUrl}/events/${eventid}/attendees/count`)
      .then((response) => {
        // console.log(response.data);
        setAttendee(response.data);
        setRefreshing(false);
      })
      .catch((err) => {console.log(err)}),

      axios.get(`${backendUrl}/events/${eventid}/${username}`)
      .then((response) => {
        if(response.data.length == 0){
          setRsvp(true);
        }
        else{
          setRsvp(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
    ])
    
    .then(() => {
      setLoading(false);
    });
  },[]);

 
  function RsvpStatus(creator)
  {
    if(creator === username) {
      return;
    }
    
    //if event at capacity - attend isn't pressable, unattend is pressable
    //fetch live numAttendees from backend

    if(attendee >= event.capacity){
      
      if(rsvp){
        return (
            <RsvpButton/>
        )
      }
      //unattend
      else {
        return (
          <TouchableOpacity onPress={()=>{
              axios.delete(`${backendUrl}/events/${eventid}/${username}`)
              .then(() => {
                navigation.navigate("UnattendConfirmation",
                {
                  attendee: username,
                  events: event,
                })
              })
            }}>
          <UnRsvp/>

          </TouchableOpacity>
        )
      }
    }
    //event not at capacity. attend is pressable, unattend is also pressable
    else {
      if(rsvp){
        return (
            <TouchableOpacity  onPress={()=> {
              axios.post(`${backendUrl}/events/${eventid}/attendees`, 
              {
                  username: username,
                  numAttendees: event.numAttendees,
                  capacity: event.capacity
              },
              {
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                  }
              })
              .catch((err) => {console.log(err)});   

              navigation.navigate("RsvpScreen",
              {
                attendee: username,
                events: event,
            
              })
            }}>
                <RsvpButton/>
            </TouchableOpacity>
        )
      } 
      //unattend
      else{
        return (
          <TouchableOpacity onPress={()=>{
              axios.delete(`${backendUrl}/events/${eventid}/${username}`)
              .then(() => {
                navigation.navigate("UnattendConfirmation",
                {
                  attendee: username,
                  events: event,
                })
              })
            }}>
            <UnRsvp/>

          </TouchableOpacity>
        )
      }
    }
  }
  
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
            <Text style={styles.locationTextStyle}>{(''+ event.location.coordinates[0]).substring(0,6) + ', ' +(''+event.location.coordinates[1]).substring(0,6) }</Text>
            <EventLabels  name='person-circle-outline' />
            <Text style={styles.creatorTextStyle}>{event.creator.username}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeTextStyle}>start:</Text>
            <EventLabels name='calendar-outline' desc={event.startDate.toString().substring(0,10) + ', '+event.startDate.toString().substring(11,16) } />
            <Text style={styles.timeTextStyle}>end:</Text>
            <EventLabels name='calendar-outline' desc={event.endDate.toString().substring(0,10) + ', '+event.startDate.toString().substring(11,16)} />
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
          <Text style={styles.capacityTextStyle}>{'attending: ' + attendee + '/' + event.capacity}</Text>
        </View>
        <View style={styles.rsvpContainer}>
            <RsvpStatus creator={event.creator.username}/>

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