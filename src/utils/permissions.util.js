import * as Location from 'expo-location';
import { store } from '../redux/store/store';
import * as actions from '../redux/actions/actions'

export const requestPermissions = async () => {
    const foreground = await Location.requestForegroundPermissionsAsync();
    if (foreground.granted) {
      store.dispatch(actions.foregroundPermChange(true));
      const background = await Location.requestBackgroundPermissionsAsync();
      if (background.granted) {
        store.dispatch(actions.backgroundPermChange(true));
      }
    }
};