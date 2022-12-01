import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
const DeviceWidth = Math.round(Dimensions.get('window').width);


const PTCard = ({info}) => {
  const username = useSelector(state => state.currUser.username);
  return (
    <View style={styles.container}>
        <View style={styles.infoStyle}>
            <Text style={styles.usernameStyle}>{info.username}</Text>
            <View style={styles.choiceIcons}>

            </View>
        </View>
    </View>
  ) 
  }
 

const styles = StyleSheet.create({
  container: {
    width: DeviceWidth/1.1,
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
  
export default PTCard;
