import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from './src/navigation';
import * as Location from 'expo-location'
import { store } from './src/redux/store/store';
import * as actions from './src/redux/actions/actions'

export default function App() {
  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground.granted) {
        store.dispatch(actions.foregroundPermChange(true));
        const background = await Location.requestBackgroundPermissionsAsync();
        if (background.granted) {
          store.dispatch(actions.backgroundPermChange(true));
        }
      }
    };
    requestPermissions();
  });

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}