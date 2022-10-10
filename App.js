import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from './src/navigation';
import * as Location from 'expo-location'
import { store } from './src/redux/store/store';
import * as actions from './src/redux/actions/actions'

export default function App() {
  const beginTracking = async () => {
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      location => {
        if (location)
          store.dispatch(actions.updateLocation({location}));
        console.log(location);
        console.log(store.getState());
      }
    )
  };
  
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

  useEffect(() => {
    requestPermissions()
    .then(() => {
      if (store.getState().foregroundPerm)
        beginTracking();
      else if (store.getState().backgroundPerm);

    });
  });

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}