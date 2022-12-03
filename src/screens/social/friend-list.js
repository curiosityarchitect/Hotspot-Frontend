import React, {useState, useEffect} from 'react';
import {View,Text, TouchableOpacity,FlatList, StyleSheet,Dimensions,Image} from 'react-native';
import FriendCard  from './friend-card';
import FriendHeader from './social-components/friend-header';
import FriendReqButton from './social-components/friend-req-button';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {backendUrl} from '../../services/const';
import { useIsFocused } from '@react-navigation/native'


const FriendList = ({route,navigation}) => {
    const username = useSelector(state => state.currUser.username);
    const friends = route.params.friends;

    return(
        <View style={styles.container}>
        
            <FriendHeader/>
            <TouchableOpacity onPress={()=>navigation.navigate('FriendRequests')} style={styles.backButton}>
              <FriendReqButton/>
            </TouchableOpacity>
             <FlatList 
              data={friends}
              renderItem={({item}) => {       
              return(
                    <FriendCard info ={item}/>
                )
              }}
              inverted = {false}
              keyExtractor={(friends => friends._id)}
              showsVerticalScrollIndicator ={false}
            />  
            
          
        
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
              <Text style={styles.loginText}>back</Text>
          </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      padding: 5,
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#faf0e6',
    },
    header: {
        flex: 1,
        alignItems: 'center',
      },
    CreateButtonStyle: {
      marginTop: 10,
    },
    backButton: {
      width: '30%',
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.333,
    }
  });


  
export default FriendList;