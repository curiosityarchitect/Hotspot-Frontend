import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { withTheme } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { createEvent } from '../../services/events.service';
import InviteButton from './invite-components/invite-button';
import DateTimePicker from '@react-native-community/datetimepicker';

const parseTags = (tagsString) => {
  return tagsString.split("#")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
    .filter((tag, index, self) => self.indexOf(tag) === index);
}

const parseInvitees = (inviteesString) => {
  return inviteesString.split(",")
    .map((invitee) => invitee.trim())
    .filter((invitee) => invitee.length > 0)
    .filter((invitee, index, self) => self.indexOf(invitee) === index);
}

const combineDateTime = (date, time) => {
  return new Date(parseDateISO(date) + parseTimeISO(time));
}

const parseDateISO = (date) => {
  return date.toISOString().substring(0, 11);
}

const parseTimeISO = (time) => {
  return time.toISOString().substring(11);
}

const EventCreationScreen = ({route,navigation}) => {
  const [invitees, setInvitees] = useState('');
  if (route.params) {
    setInvitees(route.params.invitees);
    route.params = null;
  }
  const [eventName, setEventName] = useState('');
  const [eventTagString, setEventString] = useState('');
  const [Longitude, setLong] = useState('');
  const [Latitude, setLat] = useState('');
 // Start Date and Time
  const [startDate, setStartDate] = useState(new Date());
  const [startDatePicker, setStartDatePicker] = useState(false);
  const [startTimePicker, setStartTimePicker] = useState(false);
  const [startTime, setStartTime] = useState(new Date(Date.now()));
  // End Date and Time
  const [endDate, setEndDate] = useState(new Date());
  const [endDatePicker, setEndDatePicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);
  const [endTime, setEndTime] = useState(new Date(Date.now()));
  const [capacity, setCapacity] = useState('');

  const [eventScope, setEventScope] = useState('Public');
  const creatorUsername = useSelector(state => state.currUser.username);

  function showStartDatePicker() {
    setStartDatePicker(true);
  };

  function showStartTimePicker() {
    setStartTimePicker(true);
  };

  function showEndDatePicker() {
    setEndDatePicker(true);
  };

  function showEndTimePicker() {
    setEndTimePicker(true);
  };

  function onStartDateSelected(event, value) {
    setStartTime(value);
    setStartTimePicker(false);
    setStartDate(value);
    setStartDatePicker(false);
  };

  function onEndDateSelected(event, value) {
    setEndDate(value);
    setEndDatePicker(false);
    setEndTime(value);
    setEndTimePicker(false);
  };
  const checkInput = () => {
   if (!eventName.trim()) {
      alert('Please Enter Event Name');
      return;
    }
    if (!Longitude.trim() || Longitude > 180 || Longitude < -180 || /[a-zA-Z]+/g.test(Longitude)) {
      alert('Longitude Incorrect');
      return;
    }
    if (!Latitude.trim() || Latitude > 90 || Latitude < -90 || /[a-zA-Z]+/g.test(Latitude)) {
      alert('Latitude Incorrect');
      return;
    }
    createEvent(eventName, Longitude, Latitude, undefined, parseTags(eventTagString), 
      combineDateTime(startDate, startTime), combineDateTime(endDate, endTime), 
      eventScope.toLowerCase(), parseInvitees(invitees)).
    then(()=>navigation.goBack()).catch((err)=>console.log(err))
  };

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
          placeholder="Description"
          placeholderTextColor="#808080"
          onChangeText={(eventDescription) => setDescription(eventDescription)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Event Longitude"
          placeholderTextColor="#808080"
          onChangeText={(Longitude) => setLong(Longitude)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Event Latitude"
          placeholderTextColor="#808080"
          onChangeText={((Latitude) => setLat(Latitude))}
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
      <View style={styles.MainContainer}>
 
        <Text style={styles.text}>Start Date = {startDate.toDateString()}</Text>
        
        <Text style={styles.text}>Start Time = {startTime.toLocaleTimeString('en-US')}</Text>

        {startDatePicker && (
          <DateTimePicker
            value={startDate}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onStartDateSelected}
            style={styles.datePicker}
          />
        )}

        {startTimePicker && (
          <DateTimePicker
            value={startTime}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onStartDateSelected}
            style={styles.datePicker}
          />
        )}

        {!startDatePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Pick Start Date" color="black" onPress={showStartDatePicker} />
          </View>
        )}

        {!startTimePicker && (
          <View style={{ marginBottom: 10 }}>
            <Button title="Pick Start Time" color="black" onPress={showStartTimePicker} />
          </View>
        )}


      </View>

      <View style={styles.MainContainer}>
 
        <Text style={styles.text}>End Date = {endDate.toDateString()}</Text>

        <Text style={styles.text}>End Time = {endTime.toLocaleTimeString('en-US')}</Text>

        {endDatePicker && (
          <DateTimePicker
            value={endDate}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onEndDateSelected}
            style={styles.datePicker}
          />
        )}

        {endTimePicker && (
          <DateTimePicker
            value={endTime}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onEndTimeSelected}
            style={styles.datePicker}
          />
        )}

        {!endDatePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Pick End Date" color="black" onPress={showEndDatePicker} />
          </View>
        )}

        {!endTimePicker && (
          <View style={{ marginBottom: 10 }}>
            <Button title="Pick End Time" color="black" onPress={showEndTimePicker} />
          </View>
        )}

      </View>

      <TouchableOpacity onPress={() => navigation.navigate("InvitePage")} style={styles.inviteBtn}>
        <InviteButton />
      </TouchableOpacity>

      <TouchableOpacity onPress={checkInput} style={styles.createBtn}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: '5%',
    paddingTop: '5%'
    //justifyContent: 'center',
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

  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: -40,
  },

  inviteBtn: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginStart: '15%',
    marginTop: "2%",
    backgroundColor: '#ffffff',
  },

  MainContainer: {
    flex: 0,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
 
  text: {
    fontSize: 20,
    color: 'black',
    padding: 3,
    marginBottom: 0,
    textAlign: 'center'
  },
 
  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },

});

export default EventCreationScreen;