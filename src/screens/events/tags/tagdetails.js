import React, { useEffect , useState} from 'react';
import {View,Text,SafeAreaView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import {Icon, Avatar} from 'react-native-elements';
import { findEventById } from '../../../services/events.service';
const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tagStyle: {
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
    statsStyle: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    stat: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginStart: 20,

    },
    statDesc:{
        fontSize: 9,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginStart: -12,
    },
    backContainer: {
        flex: 1,
        marginTop: '120%',
    },
    backButton: {
        width: '30%',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.333,
      },

 
});
  
  
const TagDetailsScreen = ({route, navigation}) => {
  const {item,events} = route.params;

  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.tagStyle}>
            <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{marginStart:22}}>
                  <TouchableOpacity>
                    <Title style={styles.titleStyle}>{item.description}</Title>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Caption style={styles.captionStyle}>{"event tag"}</Caption>
                  </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.statsStyle}>

            <View style={styles.stat}>
                <Caption>{events.name}</Caption>
                <Caption style={styles.statDesc}>{events.creator.username}</Caption>
            </View>

       
        </View>
        <View style={styles.backContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("My Events")} style={styles.backButton}>
                    <Text style={styles.loginText}>Back</Text>
            </TouchableOpacity>
        </View>
        
        </View>

        
    </SafeAreaView>
  );
};

export default TagDetailsScreen;
