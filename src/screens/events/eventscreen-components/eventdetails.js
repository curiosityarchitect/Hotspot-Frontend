import React,{Component} from 'react';
import {View, Text, StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import EventLabels from './event-labels';
import RsvpButton from './event-rsvp/rsvp-button';


const EventDetailsPage = ({route,navigation}) => {
  const {name, description, location, creator, eventType, capacity, start, expiration, cover} = route.params;
  const mock_user = 
  {
    name: 'Alex Wu',
    email: "wuboy@purdue.edu",
  }
  const limit = true
  if(capacity == 0){
    const limit = false;
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.coverImage} 
          source={cover}
        />
        <View style={styles.headerContent}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
        <View style={styles.eventIdentificationContainer}>
          <EventLabels name='location-outline' />
          <Text style={styles.locationTextStyle}>{location.name}</Text>
          <EventLabels  name='person-circle-outline' />
          <Text style={styles.creatorTextStyle}>{creator.username}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeTextStyle}>start:</Text>
          <EventLabels name='calendar-outline' desc={start} />
          <Text style={styles.timeTextStyle}>end:</Text>
          <EventLabels name='calendar-outline' desc={expiration} />
        </View>
        <View style={styles.capacityContainer}>
          <EventLabels name='people-circle-outline' />
          <Text style={styles.capacityTextStyle}>{'attending: ' + '0/'+capacity}</Text>
        </View>
        <View style={styles.rsvpContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate("RsvpScreen",
          {
            name: name,
            userInfo: mock_user, 
            description: description, 
            location: location.name,
            creator: creator.username,
            currentCapacity: capacity-1,
            start: start,
          })}>
            <RsvpButton/>
          </TouchableOpacity>
        </View>
        </View>
      </View>
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
    flex: 1,
    justifyContent: 'flex-top',
  },
  nameStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingLeft: 3,
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
    fontFamily:'sans-serif',
    color: Colors.grey,
  },
  //capacity
  capacityContainer:{
    start:deviceWidth/1.55,
    flexDirection: 'row',
  },
  capacityTextStyle: {
    font: 15,
    fontStyle: 'italic',
    padding: 3,
  },
  //
  rsvpContainer: {
    start: deviceWidth/1.55,
  },
 
  
});


export default EventDetailsPage;

