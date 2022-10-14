import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const checkInput = () => {
    if (!username.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    if (!password2.trim()) {
      alert('Please Enter confirm password');
      return;
    }
    if (password2 !== password) {
      alert('Password does not match');
      return;
    }
    Alert.alert(
      "Sucess",
      "Redirecting to app",
      [
        { text: "OK", onPress: () => navigation.navigate("Main App") }
      ]
    );
  };

  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={()=>navigation.navigate("Welcome")} style={styles.backBtn}>
        <Text style={styles.registerText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Hello! Register to Discover Your First Event!</Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#808080"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#808080"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(password2) => setPassword2(password2)}
        />
      </View>

      <TouchableOpacity onPress={checkInput} style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.login_button}>Already have an account? Login Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    textAlign: 'center',
    alignItems: 'center',
  },

  login_button: {
    height: 20,
    marginTop: 40,
    marginBottom: 60,
    fontSize: 12,
  },

  registerBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: '#000000',
  },

  backBtn: {
    width: '20%',
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#000000',
  },

  registerText: {
    color: 'white',
  },

  welcomeText: {
    marginTop: 100,
    width: 300,
    height: 80,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterScreen;
