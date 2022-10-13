import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const RsvpConfirmation = ({route,navigation}) => {
  const {userInfo, description, location, creator, currentCapacity, start} = route.params;
  <View style={styles.container}>
    <Text style={styles.confirmationTextStyle}>{userInfo}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  confirmationTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingLeft: 3,
  },
});

export default RsvpConfirmation;

