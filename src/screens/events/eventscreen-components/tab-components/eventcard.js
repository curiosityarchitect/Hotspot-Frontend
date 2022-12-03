//card component for each event - for MyEvents tab
import React from 'react';
import {View, Text, StyleSheet,Dimensions,Image} from 'react-native';
import EventLabels from './event-labels';

const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const EventCard = (props) => {
  const cover = require('./mcway-falls-big-sur-ca.jpeg')
  return (
    <View style={styles.container}>
        <Image 
          style={styles.imageStyle}
          source = {cover}
        /> 
        <View style={styles.eventInfoStyle}>
          <Text style={styles.eventNameStyle}>{props.info.name}</Text>
          <Text style={styles.descriptionStyle}>{(props.info.description).substring(0,44)+"..."}</Text>
          <View style={styles.IconWithLabel}>
            <View style={styles.dasteLocSeperator}>
              <EventLabels name='calendar-outline' desc={props.info.startDate.substring(0,10)} />
            </View>
            <EventLabels name='location-outline' desc={(''+props.info.location.coordinates[0]).substring(0,6) + ', ' +(''+props.info.location.coordinates[1]).substring(0,6) }/>
          </View>
        </View>

    </View>
  ) 
}
Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; 
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

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
    width: '100%',
    height: '50%',
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
    marginTop: '5%',
  }

})
  
export default EventCard;