import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import axios  from 'axios';
import {backendUrl} from '../../services/const';
import {useSelector} from 'react-redux';
import UnaddButton from './social-components/undadd-button';
const DeviceWidth = Math.round(Dimensions.get('window').width);


const FriendCard = ({info}) => {
  const username = useSelector(state => state.currUser.username);
  return (
    <View style={styles.container}>
        <View style={styles.infoStyle}>
            <Text style={styles.usernameStyle}>{info.friend}</Text>
            <View style={styles.choiceIcons}>
                <TouchableOpacity onPress={()=>{
                      axios.delete(`${backendUrl}/friends/unadd`,
                      {
                          method: 'DELETE',
                          headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json'
                          },
                          data: {
                            username: username,
                            toDelete: info.friend
                          }
                      })
                  }}>
                  <UnaddButton username={username} friend={info.friend}/>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
  },


})
  
export default FriendCard;