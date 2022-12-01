import React, { useEffect , useState} from 'react';
import {View,Text,FlatList,SafeAreaView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import {Icon, Avatar} from 'react-native-elements';
import PTCard from './profileTagCard';
import axios from 'axios';
import { backendUrl } from '../../../services/const';

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#faf0e6',
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
  
  
const ProfileTagDetailsScreen = ({route, navigation}) => {
  const header = route.params;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`${backendUrl}/profile/tag/${header}`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        } 
    }).then((response) => {
        setUsers(response.data)  
    }).catch((error) => {
        console.log(error);
    }
  );
  }, []);
  console.log(users)
  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.tagStyle}>
            <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{marginStart:2}}>
                  <TouchableOpacity>
                    <Title style={styles.titleStyle}>{header}</Title>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Caption style={styles.captionStyle}>{"event tag"}</Caption>
                  </TouchableOpacity>
                  <FlatList 
                    data={users}
                    renderItem={({item}) => {       
                    return(
                          <PTCard info ={item}/>
                      )
                    }}
                    keyExtractor={(users => users._id)}
                    showsVerticalScrollIndicator ={false}
            />  
            
            </View>
        </View>
      
        <View style={styles.backContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={styles.backButton}>
                    <Text style={styles.loginText}>Back</Text>
            </TouchableOpacity>
        </View>
        
        </View>

        
    </SafeAreaView>
  );
};

export default ProfileTagDetailsScreen;
