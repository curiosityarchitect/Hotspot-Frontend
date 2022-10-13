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
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;