import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createEvent } from '../../services/events.service';

const parseTags = (tagsString) => {
  return tagsString.split("#")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}

const EventCreationScreen = ({navigation}) => {
  const [eventName, setEventName] = useState('');
  const [eventTagString, setEventString] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEendDate] = useState('');

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
          onChangeText={(eventLocation) => setEventLocation(eventLocation)}
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

      <TouchableOpacity onPress={()=>
        createEvent(eventName, undefined, undefined, undefined, parseTags(eventTagString)).
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

  createBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    backgroundColor: '#000000',
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