import React from 'react';
import {View,Text, TouchableOpacity,FlatList, StyleSheet,Dimensions,Image} from 'react-native';
import FriendCard  from './friend-card';
import FriendRequestHeader from './social-components/FriendReqHeader';

const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const friendrequests = [
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


const FriendRequestView = ({navigation}) => {
    return(
        <View style={styles.container}>
            <FriendRequestHeader/>
            <FlatList 
              data={friendrequests} 
              renderItem={({item}) => {       
                return(
                    <FriendCard info ={item}/>
                )
              }}
              keyExtractor={(friendrequests => friendrequests.uid)}
              showsVerticalScrollIndicator ={false}
            />
        
          <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={styles.backButton}>
              <Text style={styles.loginText}>Back</Text>
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
