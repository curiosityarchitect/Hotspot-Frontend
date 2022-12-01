import React, {useState, useEffect} from 'react';
import {View,Text, TouchableOpacity,FlatList, StyleSheet,Dimensions,Image} from 'react-native';
import FriendReqCard from './friend-request-card';
import FriendRequestHeader from './social-components/friend-request-header';
import { sendRequest, getRequests, acceptRequest, rejectRequest, isFriends } from '../../services/request.service';
import axios from 'axios';
import {backendUrl} from '../../services/const';
import { useIsFocused } from '@react-navigation/native'
import {useSelector} from 'react-redux';

const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
 

const FriendRequestView = ({route,navigation}) => {
    const username = useSelector(state => state.currUser.username);
    const [isLoading, setIsLoading] = useState(true)
    const [friendrequests, setFriendRequests] = useState([])
   // let friendrequests = [];
    const isFocused = useIsFocused()
    
    useEffect(() => {

      axios.get(`${backendUrl}/friend-requests/${username}`,
      {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          }
      }).then((response) => {
          setFriendRequests(response.data)
          setIsLoading(false)
      }).catch((error) => {
          console.log(error);
      })
    }, [isFocused]);
   
/*  const friendrequests = [
    {username: 'alexwu',
     uid: '1',
    },
    {username: 'davedude5',
     uid: '2',},
    {username: 'evanboba7',
     uid: '3',},
    {username: 'barnob8',
     uid: '4',},
    {username: 'johnhello',
     uid: '5',},
]
 */

    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } 

    return(
        <View style={styles.container}>
            <FriendRequestHeader/>
             <FlatList 
              data={friendrequests} 
              renderItem={({item}) => {       
              return(
                    <FriendReqCard info ={item}/>
                )
              }}
              keyExtractor={(friendrequests => friendrequests._id)}
              showsVerticalScrollIndicator ={false}
            />  
        
          <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={styles.backButton}>
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


  
export default FriendRequestView;