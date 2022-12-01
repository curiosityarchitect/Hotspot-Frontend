import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';



const UnattendConfirmation = ({route,navigation}) => {
  const {attendee,events} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.confirmationTextStyle}>{attendee}, you have successfully removed your RSVP for </Text>
      <Text style={styles.confirmationDetailStyle}>{events.name}</Text>
      <View style={styles.emailContainer}>
        <Text style={styles.emailTextStyle}>{events.creator.username} will recieve a notification...</Text>
      </View>
      <View style={styles.doneView}>
        <TouchableOpacity onPress={()=>navigation.navigate("My Events",
        {
          events: events,
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
    paddingTop: 65,
    alignSelf: 'center',
  },
  confirmationDetailStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: 30,
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

export default UnattendConfirmation;

