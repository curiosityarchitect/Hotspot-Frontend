import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/events';
import HomeScreen from '../screens/home';
import GroupScreen from '../screens/groups';
import ProfileScreen from '../screens/profile';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="My Events" component={EventScreen}
      options={{
            tabBarIcon: () => {
              return (
                <Icon
                name={"description"}
                color="#000000"
                />
              );
            },
          }}
      />
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
            tabBarIcon: () => {
              return (
                <Icon
                name={"map"}
                color="#000000"
                />
              );
            },
          }}
      />
      <Tab.Screen name="Groups" component={GroupScreen}
      options={{
            tabBarIcon: () => {
              return (
                <Icon
                name={"groups"}
                color="#000000"
                />
              );
            },
          }}
      />
      <Tab.Screen options={{tabBarIcon: () => {
              return (
                <Icon
                name={"person"}
                color="#000000"
                />
              );
            },
            headerShown: false
            }} name="Profile" component={ProfileScreen}  />
    </Tab.Navigator>
  );
}