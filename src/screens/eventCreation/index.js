import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import TimeInput from '@tighten/react-native-time-input';
import DateField from 'react-native-datefield';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { setEvent } from '../../services/events.service';

const EventCreationScreen = ({navigation}) => {
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEendDate] = useState('');

  const handleTimeChangeStart = (startTime, validTime) => {
    if (!validTime) return;

    setStartTime(startTime);
  }

  const handleTimeChangeEnd = (endTime, validTime) => {
    if (!validTime) return;

    setEndTime(endTime);
  }

  const checkInput = () => {
    if (!eventName.trim()) {
      alert('Please Enter Event Name');
      return;
    }
    if (!eventType.trim()) {
      alert('Please Enter Event Type');
      return;
    }
    if (!eventLocation.trim()) {
      alert('Please Enter Event Location');
      return;
    }
    if (!startTime.trim()) {
      alert('Please Enter Start Time');
      return;
    }
    if (!endTime.trim()) {
      alert('Password Enter End Time');
      return;
    }
    if (!startDate.trim()) {
      alert('Password Enter End Time');
      return;
    }
    if (!endDate.trim()) {
      alert('Password Enter End Time');
      return;
    }
    setEvent(eventName, eventType, eventLocation, startTime, endTime, startDate, endDate);
    navigation.navigate("Home");
  };

  

  return (
    <View style={styles.container}>

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
          placeholder="Event Type"
          placeholderTextColor="#808080"
          onChangeText={(eventType) => setEventType(eventType)}
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
        <TimeInput
          style={styles.TextInput}
          placeholderTextColor="#808080"
          onChangeText={(startTime) => setStartTime(startTime)}
        />
      </View>

      <View style={styles.inputView}>
        <TimeInput
          style={styles.TextInput}
          placeholderTextColor="#808080"
          onChangeText={(endTime) => setEndTime(endTime)}
        />
      </View>

      <View style={styles.inputView}>
        <DateField
          style={styles.TextInput}
          styleInput={{ fontSize: 10 }}
          containerStyle={{ marginVertical: 20 }}
          onTimeChange={handleTimeChangeStart} 
          placeholderTextColor="#808080"
          onChangeText={(startDate) => setStartDate(startDate)}
        />
      </View>

      <View style={styles.inputView}>
        <DateField
          style={styles.TextInput}
          styleInput={{ fontSize: 10 }}
          containerStyle={{ marginVertical: 20 }}
          onTimeChange={handleTimeChangeEnd} 
          placeholderTextColor="#808080"
          onChangeText={(endDate) => setEendDate(endDate)}
        />
      </View>

      <TouchableOpacity onPress={checkInput} style={styles.createBtn}>
        <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.cancelBtn}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>

    </View>
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
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    display: "flex",
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    marginTop: -30,
    height: 50,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },

  createBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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