import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import axios  from 'axios';
import {backendUrl} from '../../services/const';
import * as MailComposer from 'expo-mail-composer';
const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const appEmail = 'hotspot.notification@gmail.com'

const NotificationCard = ({info}) => {
  const username = 'alexwu'
  return (
    <View style={styles.container}>
        <View style={styles.infoStyle}>
            <Text style={styles.usernameStyle}>{info.message}</Text>
            <View style={styles.choiceIcons}>
               
            </View>
        </View>
    </View>
  ) 
  }
/*  const friendStatus = async (username, deliverer) => {
    const status = await isFriends(username, deliverer);
    return status;
  }  */

const styles = StyleSheet.create({
  container: {
    width: DeviceWidth - 20,
    height: 50,
    marginTop: 10,
    backgroundColor: '#f8f8ff', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    elevation: 10,
  },
  infoStyle:{
    flexDirection: 'row',
    paddingTop: 6,
    paddingLeft: 3,
  },
  usernameStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    paddingTop: 3,
    paddingLeft: 3,
  },
  choiceIcons:{
    flexDirection: 'row',
    position: 'absolute',right: 10,
  }


})
  
export default NotificationCard;
