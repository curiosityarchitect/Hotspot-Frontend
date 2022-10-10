import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/events';
import HomeScreen from '../screens/home';
import GroupScreen from '../screens/groups';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
    </Tab.Navigator>
  );
}