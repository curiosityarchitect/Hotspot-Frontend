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
import UserSearchScreen from './src/screens/search';
import EventDetailsPage from './src/screens/events/eventscreen-components/event-details/eventdetails';
import RsvpConfirmation from './src/screens/events/eventscreen-components/event-rsvp/rsvp-confirmation';
import EventScreen from './src/screens/events';
import FriendRequestView from './src/screens/social/freind-request-view';
import InvitePage from './src/screens/eventCreation/invite-components/invite-page';
import ProfileScreen from './src/screens/profile';
import SettingsScreen from './src/screens/profile/profile-components/settings';


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
        <Stack.Screen name="Main App" component={MyTabs}/>
        <Stack.Screen name="Search" component={UserSearchScreen}/>
        <Stack.Screen name="CreateEvent" component={EventCreationScreen}/>
        <Stack.Screen name="MyEvents" component={EventScreen}/>
        <Stack.Screen name="EventDetails" component={EventDetailsPage}/>
        <Stack.Screen name="RsvpScreen" component={RsvpConfirmation}/>
        <Stack.Screen name="FriendRequests" component={FriendRequestView}/>
        <Stack.Screen name="InvitePage" component={InvitePage}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;