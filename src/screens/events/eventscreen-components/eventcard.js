
import React from 'react';
import {View, Text, StyleSheet,Dimensions,Image} from 'react-native';
import EventLabels from './event-labels';

const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const EventCard = (props) => {
  //console.log(props);
  return (
    <View style={styles.container}>
        <Image 
          style={styles.imageStyle}
          source = {props.info.cover}
        /> 
        <View style={styles.eventInfoStyle}>
          <Text style={styles.eventNameStyle}>{props.info.name}</Text>
          <Text style={styles.descriptionStyle}>{(props.info.description).substring(0,44)+"..."}</Text>
          <View style={styles.IconWithLabel}>
            <View style={styles.dateLocSeperator}>
              <EventLabels name='calendar-outline' desc={props.info.start} />
            </View>
            <EventLabels name='location-outline' desc={props.info.location.name}/>
          </View>
        </View>

    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    width: DeviceWidth - 22,
    height: 200,
    marginTop: 10,
    backgroundColor: '#f8f8ff', 
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.333,
    elevation: 10,
  },
  imageStyle: {
    width: DeviceWidth - 22,
    height: 111,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.88,
    alignContent: 'center',
  },
  eventNameStyle: {
    fontSize: 17,
    fontWeight: '555',
    marginTop: 4,
  },
  descriptionStyle: {
    fontWeight: '200',
  },
  eventInfoStyle: {
    marginHorizontal: 10,
  },
  dateLocSeperator:{
    marginRight: 10,
  },
  IconWithLabel: {
    flexDirection: 'row',
    marginTop: 22,
  }

})
  
export default EventCard;
