import { View, Text } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters';
import {
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function WelcomeScreen() {
 
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require("./assets/logo.png")} />
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 10,
    resizeMode: 'contain',
    width: scale(500),
    height: verticalScale(60)
  },
 
  loginBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
    backgroundColor: "#000000",
  },

  registerBtn: {
    width: "90%",
    borderRadius: 10,
    borderWidth:1,
    borderColor:"#000000",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#fff",
  },

  loginText: {
    color: 'white'
  },

  registerText: {
    color: 'black'
  },

});