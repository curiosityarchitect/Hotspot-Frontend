import React from 'react'
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import filter from 'lodash.filter'

  const friendData = [
  {
    username: 'alexwucodes',
    password: 'thisisareallygoodpassword2',
    timestamps: true
  },
  {
    username: 'davecodes',
    password: '123456',
    timestamps: true
  },
  {
    username: 'arnob.lifts',
    password: 'ilovearnob',
    timestamps: true
  },

  {
    username: 'linuxenthusiast',
    password: 'cathedral-model-stinks',
    timestamps: true
  },

  {
    username: 'notmockuser',
    password: 'notmockpassword',
    timestamps: true
  },
]


const FriendsList = ({route,navigation}) => {


  <View style={styles.container}>
  <View style={styles.header}>
    <Image 
      style={styles.coverImage} 
      source={cover}
    />
    <View style={styles.headerContent}>
      
      <FlatList>
          data={events} 
          renderItem={({item}) => {       
            return(
              <TouchableOpacity onPress={()=>navigation.navigate("frienddetails",{
                username: item.username,
                password: item.password,
                timestamps: item.timestamps,
              })}>
                <View style={styles.eventContainer}>
                  <Text style={styles.eventName}>{item.username}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        }
        keyExtractor={item => item.username}
        </FlatList>
    </View>
</View>
</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  nameStyle:{ 
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
})


export default FriendList