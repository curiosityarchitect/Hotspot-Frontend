import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/events';
import HomeScreen from '../screens/home';
import GroupScreen from '../screens/groups';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="My Events" component={EventScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen}  />
    </Tab.Navigator>
  );
}

