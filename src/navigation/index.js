import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/events';
import HomeScreen from '../screens/home';
import GroupScreen from '../screens/groups';
import ProfileScreen from '../screens/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { backendUrl } from '../services/const';
import { useEffect, useState } from 'react';
import { store } from '../redux/store/store';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const userid = store.getState().currUser._id;
  const [eventCount, setEventCount] = useState(0)
  const [groupCount, setGroupCount] = useState(0)
  
  useEffect(() => {
      axios.get(`${backendUrl}/events?userid=${userid}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setEventCount(response.data.length)
        }).catch((error) => {
            console.log(error);
        }
      );
  }, []);
  
  return (
    <Tab.Navigator initialRouteName="Home"  screenOptions={{
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'tan',
    }}>
      <Tab.Screen options={
          {
            headerShown: false,
            tabBarIcon:({focused}) =>(
              <Ionicons name="golf" size={25} color={focused ? "tan" : "gray"} />
            ), tabBarBadge: eventCount
          }
        }icon="Person" name="My Events" component={EventScreen} />
      <Tab.Screen options={
          {
            headerShown: false,
            tabBarIcon:({focused}) =>(
              <Ionicons name="map" size={25} color={focused ? "tan" : "gray"} />
            ),
          }
        } name="Home" component={HomeScreen} />
      <Tab.Screen options={
          {
            headerShown: true,
            tabBarIcon:({focused}) =>(
              <Ionicons name="people" size={25} color={focused ? "tan" : "gray"} />
            ),
          }
        } name="Group" component={GroupScreen} />
      <Tab.Screen options={
          {
            headerShown: false,
            tabBarIcon:({focused}) =>(
              <Ionicons name="person" size={25} color={focused ? "tan" : "gray"} />
            ),
          }} 
          name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}