import React, {useState, useEffect} from 'react';
import {View,Text, TouchableOpacity,FlatList, StyleSheet,Dimensions,Image} from 'react-native';
import FriendCard  from './friend-request-card';
import NotificationHeader from './social-components/notification-header';
import axios from 'axios';
import {backendUrl} from '../../services/const';
import { useIsFocused } from '@react-navigation/native'
import NotificationCard from './notification-card';

const NotificationView = ({navigation}) => {
    const username = 'alexwu';
    const [isLoading, setIsLoading] = useState(true)
    const [notifications, setNotifications] = useState([])

    const isFocused = useIsFocused()
    useEffect(() => {

      axios.get(`${backendUrl}/notifications/${username}`,
      {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          }
      }).then((response) => {
          setNotifications(response.data)
          setIsLoading(false)
      }).catch((error) => {
          console.log(error);
      })
    }, [isFocused]);
   
    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } 

    return(
        <View style={styles.container}>
            <NotificationHeader/>
             <FlatList 
              data={notifications} 
              renderItem={({item}) => {       
              return(
                    <NotificationCard info ={item}/>
                )
              }}
              inverted = {false}
              keyExtractor={(notifications => notifications._id)}
              showsVerticalScrollIndicator ={false}
            />  
            
          <TouchableOpacity onPress={()=> {navigation.navigate("Profile") 
          axios.delete(`${backendUrl}/notifications`,
            {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
              //  console.log(response)
            }
            ).catch((error) => {
                console.log(error);
            }
            )
           } } style={styles.backButton}>
              <Text style={styles.loginText}>clear</Text>
          </TouchableOpacity>
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
      marginBottom: 10,
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


  
export default NotificationView;