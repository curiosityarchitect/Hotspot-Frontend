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
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = () => Alert.alert("Error")

  return (
    <View style={styles.container}>

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

      <TouchableOpacity onPress={()=>navigation.navigate("Main App")} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Welcome")} style={styles.backBtn}>
        <Text style={styles.loginText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
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
    width: '90%',
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#000000',
  },

  forgot_button: {
    height: 30,
    marginTop: 15,
    marginBottom: 22,
    fontSize: 11,
  },

  register_button: {
    height: 20,
    marginTop: -33,
    marginBottom: 77,
    fontSize: 12,
  },

  loginBtn: {
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -9,
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
