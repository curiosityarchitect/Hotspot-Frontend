import React from 'react';
import {View, FlatList, StyleSheet,Dimensions,Image} from 'react-native';
import FriendCard  from './friend-card';
import FriendRequestHeader from './social-components/FriendReqHeader';

const DeviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

friendrequests = [
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


const FriendRequestView = () => {
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
    }
  });


  
export default FriendRequestView;
