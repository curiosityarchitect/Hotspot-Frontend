import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { sendRequest, rejectRequest, isFriends } from '../../services/request.service';
import axios  from 'axios';
import {backendUrl} from '../../services/const';
const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;


const FriendCard = ({info}) => {
  const username = 'alexwu'
  return (
    <View style={styles.container}>
        <View style={styles.infoStyle}>
            <Icon name="person-outline"></Icon>
            <Text style={styles.usernameStyle}>{info.deliverer}</Text>
            <View style={styles.choiceIcons}>
                <TouchableOpacity onPress={()=>{
                     axios.post(`${backendUrl}/friend-requests/status/${username}/accept`,
                     {
                         deliverer: info.deliverer
                     }, {
                         method: 'POST',
                         headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json'
                         }
                     })
                 }}>
                    <Icon name="check"></Icon>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                     axios.post(`${backendUrl}/friend-requests/status/${username}/decline`,
                     {
                         deliverer: info.deliverer
                     }, {
                         method: 'POST',
                         headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json'
                         }
                     })
                 }}>
                    <Icon name="close"></Icon>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  ) 
  }

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
  
export default FriendCard;
