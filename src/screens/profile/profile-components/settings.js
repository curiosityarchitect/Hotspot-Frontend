import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { updateProfile, usernameChange } from '../../../services/profile.service';
import {store} from '../../../redux/store/store';


 

const SettingsScreen = ({route, navigation}) => {
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [displayLocation, setDisplayLocation] = useState('');
  // const [newusername, setUsername] = useState('');
  const [profTags, setProfTags] = useState('');
  const username = useSelector(state => state.currUser.username);
  const id = store.getState().currUser._id;

  const validate = () => {
    updateProfile(displayName, phoneNumber, displayLocation, username,username,profTags)
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Settings</Text>

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Display Name"
          placeholderTextColor="#808080"
          onChangeText={(displayName) => setDisplayName(displayName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Phone Number"
          placeholderTextColor="#808080"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Set New Display Location"
          placeholderTextColor="#808080"
          onChangeText={(displayLocation) => setDisplayLocation(displayLocation)}
        />
      </View>

      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Change Username" 
          placeholderTextColor="#808080"
          onChangeText={(newusername) => setUsername(newusername)}
        />
      </View> */}

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Input Tags" 
          placeholderTextColor="#808080"
          onChangeText={(profTags) => setProfTags(profTags)}
        />
      </View>

      <TouchableOpacity onPress={validate}
       style={styles.createBtn}>
        <Text style={styles.createText}>Apply</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.cancelBtn}>
        <Text style={styles.cancelText}>Back</Text>
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

export default SettingsScreen;