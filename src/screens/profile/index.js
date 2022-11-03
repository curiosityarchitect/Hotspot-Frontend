import React, { useEffect , useState} from 'react';
import {View,Text,SafeAreaView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import {Icon, Avatar} from 'react-native-elements';
import EventLabels from '../events/eventscreen-components/tab-components/event-labels';
import NotificationButton from './profile-components/notification-button';
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
      alignItems: 'flex-end',
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

  
const ProfileScreen = ({navigation}) => {
  const username = 'alexwu';
  const [profile, setProfile ] = useState([])
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused()

  useEffect(() => {
    getUpdatedProfile(username).then((response) => {
      setProfile(response.data)
      setIsLoading(false);
    }).catch ((err) => {console.log(err)});
    axios.get(`${backendUrl}/profile/${username}/tags`)
    .then((response) => {
      console.log(response.data)
      setTags(response.data)
    })
    .catch((err) => {console.log(err)});
  }, [isFocused])

   if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } 

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
                    <TouchableOpacity onPress={()=>{navigation.navigate('FriendRequests')}}>
                      <NotificationButton/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.userInfoStyle}>
            <View style = {styles.locationStyle}>
                <EventLabels name='location-outline'/>
                <Text style={{color:'#777777',marginStart: 10}}>{profile.displayLocation}</Text>
            </View>
            <View style={styles.locationStyle}>
              <EventLabels name="call-outline"/>
              <Text style={{color:"#777777", marginLeft: 10}}>{profile.phoneNumber}</Text>
            </View>
            <View style={styles.locationStyle}>
              <EventLabels name="pricetag"/>
              <Text style={{color:"#777777", marginLeft: 10}}>{profile.profTags}</Text>
            </View>
        </View>
        <View style={styles.statsStyle}>
            <View style={[styles.stat, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <TouchableOpacity>
                <Title>100</Title>
                <Caption>friends</Caption>
              </TouchableOpacity>
            </View>
            <View style={styles.stat}>
              <TouchableOpacity>
                <Title>100</Title>
                <Caption>events</Caption>
              </TouchableOpacity>
            </View>

        </View>

     
    </SafeAreaView>
  );
};

export default ProfileScreen;