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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkInput = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    navigation.navigate("Main App");
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={()=>navigation.navigate("Welcome")} style={styles.backBtn}>
        <Text style={styles.loginText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Welcome back!</Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your email"
          placeholderTextColor="#808080"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={checkInput} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.register_button}>Don't have an account? Register Now</Text>
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

  backBtn: {
    width: '20%',
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
    backgroundColor: '#000000',
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontSize: 11,
  },

  register_button: {
    height: 20,
    marginTop: 40,
    marginBottom: 40,
    fontSize: 12,
  },

  loginBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    backgroundColor: '#000000',
  },

  loginText: {
    color: 'white',
  },

  welcomeText: {
    marginTop: 100,
    height: 50,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
