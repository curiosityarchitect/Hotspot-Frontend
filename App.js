import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation';
import { onBoot } from './src/utils/app.util';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import WelcomeScreen from './src/screens/welcome';
import RegisterScreen from './src/screens/register'
import EventCreationScreen from './src/screens/eventCreation';
import UserSearchScreen from './src/screens/search/searchUser';
import EventSearchScreen from './src/screens/search/searchEvent';
import EventDetailsPage from './src/screens/events/eventscreen-components/event-details/eventdetails';
import RsvpConfirmation from './src/screens/events/eventscreen-components/event-rsvp/rsvp-confirmation';
import EventScreen from './src/screens/events';
import FriendRequestView from './src/screens/social/freind-request-view';
import NotificationView from './src/screens/social/notification-view';
import InvitePage from './src/screens/eventCreation/invite-components/invite-page';
import ProfileScreen from './src/screens/profile';
import SettingsScreen from './src/screens/profile/profile-components/settings';
import TagDetailsScreen from './src/screens/events/tags/tagdetails';
import FriendList from './src/screens/social/friend-list';

const App = () => {
  const Stack = createStackNavigator();

  useEffect(onBoot);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="MainApp" component={MyTabs}/>
        <Stack.Screen name="UserSearch" component={UserSearchScreen}/>
        <Stack.Screen name="EventSearch" component={EventSearchScreen}/>
        <Stack.Screen name="CreateEvent" component={EventCreationScreen}/>
        <Stack.Screen name="MyEvents" component={EventScreen}/>
        <Stack.Screen name="EventDetails" component={EventDetailsPage}/>
        <Stack.Screen name="RsvpScreen" component={RsvpConfirmation}/>
        <Stack.Screen name="FriendRequests" component={FriendRequestView}/>
        <Stack.Screen name="Notifications" component={NotificationView}/>
        <Stack.Screen name="InvitePage" component={InvitePage}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
        <Stack.Screen name ="TagDetails" component={TagDetailsScreen}/>
        <Stack.Screen name ='FriendList' component={FriendList}/>
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;