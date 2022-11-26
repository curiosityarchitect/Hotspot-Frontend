import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { createEvent } from '../../services/events.service';
import InviteButton from './invite-components/invite-button';
import { useSelector } from 'react-redux';


const parseTags = (tagsString) => {
  return tagsString.split("#")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
    .filter((tag, index, self) => self.indexOf(tag) === index);
}


const parseInvitees = (invitees) => {
  return invitees.split(",")
    .map((invitee) => invitee.trim())
    .filter((invitee) => invitee.length > 0)
    .filter((invitee, index, self) => self.indexOf(invitee) === index);
}
 


const EventCreationScreen = ({route,navigation}) => {
  const [invitees, setInvitees] = useState('');
  if (route.params) {
    setInvitees(route.params.invitees);
    console.log(invitees)
    route.params = null;
  }
  const [eventName, setEventName] = useState('');
  const [eventTagString, setEventString] = useState('');
  const [eventAddress, setEventAddress] = useState('');
  const [eventDescription, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEendDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [eventScope, setEventScope] = useState('Public');
  const creatorUsername = useSelector(state => state.currUser.username);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.welcomeText}>Create Your Event!</Text>

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Event Name"
          placeholderTextColor="#808080"
          onChangeText={(eventName) => setEventName(eventName)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {setEventScope(eventScope === "Public" ? "Private" : "Public")}}
        style={styles.scopeBtn}
      >
        <Text style={styles.scopeBtnText}>{eventScope}</Text>
      </TouchableOpacity>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Event Tags"
          placeholderTextColor="#808080"
          onChangeText={(eventTagString) => setEventString(eventTagString)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Event Location"
          placeholderTextColor="#808080"
          onChangeText={(eventAddress) => setEventAddress(eventAddress)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Description"
          placeholderTextColor="#808080"
          onChangeText={(eventDescription) => setDescription(eventDescription)}
        />
      </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Start Time"
          placeholderTextColor="#808080"
          onChangeText={(startTime) => setStartTime(startTime)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="End Time"
          placeholderTextColor="#808080"
          onChangeText={(endTime) => setEndTime(endTime)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Start Date"
          placeholderTextColor="#808080"
          onChangeText={(startDate) => setStartDate(startDate)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="End Date"
          placeholderTextColor="#808080"
          onChangeText={(endDate) => setEendDate(endDate)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Capacity"
          placeholderTextColor="#808080"
          onChangeText={(capacity) => setCapacity(capacity)}
        />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate("InvitePage")} style={styles.inviteBtn}>
        <InviteButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>
        createEvent({
          name: eventName, 
          description: eventDescription,
          address: eventAddress,
          startTime: startTime,
          endTime: endTime,
          startDate: startDate,
          endDate: endDate,
          capacity: capacity,
          username: creatorUsername,
          tags: parseTags(eventTagString),
          invitees: parseInvitees(invitees),
          scope: eventScope.toLowerCase()
        }).
          then(()=>navigation.goBack()).catch((err)=>console.log(err))} 
        style={styles.createBtn}>
        <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.cancelBtn}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#808080',
    width: '90%',
    height: 45,
    marginBottom: "2%"  ,

    alignItems: 'center',
  },

  TextInput: {
    display: "flex",
    height: 40,
    flex: 1,
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    marginTop: "5%",
    marginBottom: "5%",
    height: 50,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  inviteBtn: {
  
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginStart: '15%',
    marginTop: "2%",
    backgroundColor: '#ffffff',
  },
  createBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    backgroundColor: '#000000',
  },

  scopeBtn: {
    width: '30%',
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "2%"  ,
    backgroundColor: '#000000',
  },

  scopeBtnText: {
    color: 'white'
  },

  createText: {
    color: 'white',
  },

  cancelBtn: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#808080',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#F5F5F5',
  },
  
  cancelText: {
    color: 'black',
  },

});

export default EventCreationScreen;