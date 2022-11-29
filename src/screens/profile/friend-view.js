import React, { useEffect , useState} from 'react';
import {View,Text,SafeAreaView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import {Icon, Avatar} from 'react-native-elements';
import EventLabels from '../events/eventscreen-components/tab-components/event-labels';
import NotificationsButton from './profile-components/notifications-button';
import SettingsButton from './profile-components/settings-button';
import { getUpdatedProfile } from '../../services/profile.service';
import { useIsFocused } from '@react-navigation/native'
import { backendUrl } from '../../services/const';
import axios from 'axios';

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoStyle: {
      paddingStart: 20,
      marginBottom: 25,
    },
    titleStyle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    captionStyle: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    NotificationButtonStyle: {
      marginStart: deviceWidth*0.11,
    },
    locationStyle: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    statsStyle: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    stat: {
      width: '50%',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
});

  
const FriendView = ({navigation}) => {
  const username = 'alexwu';
  const [profile, setProfile ] = useState([])
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused()
  const [friendList, setFriendList] = useState([])
  const friends = []

  useEffect(() => {
    getUpdatedProfile(username).then((response) => {
      setProfile(response.data)
      setIsLoading(false);
    }).catch ((err) => {console.log(err)});
    axios.get(`${backendUrl}/profile/${username}/tags`)
    .then((response) => {
      //console.log(response.data)
      setTags(response.data)
    })
    .catch((err) => {console.log(err)});
    axios.get(`${backendUrl}/friends/${username}`,
      {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          }
      }).then((response) => {
          setFriendList(response.data)
          setIsLoading(false)
      }).catch((error) => {
          console.log(error);
      })
  }, [isFocused])

   if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } 

  //retrieve friend data
  let id = 0;
  let friendCount = friendList[0]
  for (let i = 1; i < friendList.length; i++) {
    if (friendList[i].username1 !==  undefined) {
      friends.push({_id: id, friend: friendList[i].username1})
    }
    else if (friendList[i].username2 !== undefined) {
      friends.push({_id: id, friend: friendList[i].username2})
    }
    id++;
  }
  //console.log(friends)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.userInfoStyle}>
            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity>
                <Avatar
                    rounded
                    source={require('./profile-temp-assets/spongebob.jpeg')}
                    size={90}
                />
                </TouchableOpacity>
                <View style={{marginStart:22}}>
                  <TouchableOpacity>
                    <Title style={styles.titleStyle}>{profile.displayName}</Title>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Caption style={styles.captionStyle}>{profile.username}</Caption>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('SettingsScreen')}>
                    <SettingsButton/>
                  </TouchableOpacity>
                </View>
                <View style={styles.NotificationButtonStyle}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}}>
                      <NotificationsButton/>
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>
        <View style={styles.userInfoStyle}>
            <View style = {styles.locationStyle}>
                <EventLabels name='location-outline'/>
                <TouchableOpacity>
                <Text style={{color:'#777777',marginStart: 10}}>{profile.displayLocation}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.locationStyle}>
              <EventLabels name="call-outline"/>
              <TouchableOpacity>
              <Text style={{color:"#777777", marginLeft: 10}}>{profile.phoneNumber}</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.locationStyle}>
              <EventLabels name="pricetag"/>
              <TouchableOpacity>
              <Text style={{color:"#777777", marginLeft: 10}}>{profile.profTags}</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.statsStyle}>
            <View style={[styles.stat, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <TouchableOpacity onPress={()=>navigation.navigate("FriendList" ,{friends: friends})}>
                <Title>{friendCount}</Title>
                <Caption>friends</Caption>
              </TouchableOpacity>
            </View>
            <View style={styles.stat}>
              <TouchableOpacity>
                <Title>11</Title>
                <Caption>events</Caption>
              </TouchableOpacity>
            </View>
            
        </View>

     
    </SafeAreaView>
  );
};

export default FriendView;
