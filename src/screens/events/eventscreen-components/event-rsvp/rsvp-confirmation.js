import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';


const RsvpConfirmation = ({route,navigation}) => {
  const {name,userInfo, description, location, creator, capacity, start} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.confirmationTextStyle}>{userInfo.name}: Thank you for the RSVP!</Text>
      <Text style={styles.confirmationDetailStyle}>Here are the details...</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTextStyle}>Event: {name}</Text>
        <Text style={styles.detailTextStyle}>Where: {location}</Text>
        <Text style={styles.detailTextStyle}>When: {start}</Text>
        <Text style={styles.detailTextStyle}>Hosted by: {creator}</Text>
        <Text style={styles.detailTextStyle}>Spots Remaining: {capacity} </Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailTextStyle}>We have sent a confirmation email to</Text>
        <Text style={styles.emailTextStyle}>{userInfo.email}</Text>
      </View>
      <View style={styles.doneView}>
        <TouchableOpacity onPress={()=>navigation.navigate("EventDetails",
        {
          name: name,
          userInfo: userInfo,
          description: description,
          location: location,
          creator: creator,
          capacity: capacity+1,
          start: start,
          rsvpList:userInfo,

        })} style={styles.backButton}>
              <Text style={styles.loginText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
  },
  confirmationTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Sans-serif',
    paddingTop: 65,
    alignSelf: 'center',
  },
  confirmationDetailStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Sans-serif',
    paddingTop: 10,
    alignSelf: 'center',
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  detailTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Sans-serif',
    paddingTop: 55,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  emailContainer: {
    flex: 1,
    paddingTop: 44,
  },
  emailTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Sans-serif',
    alignSelf: 'center',
    paddingTop: 12,
  },
  doneView:{
    alignContent: 'center',
    flex: 1,
    paddingTop: 10,
    width: '100%',
    alignItems: 'center',
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

});

export default RsvpConfirmation;

