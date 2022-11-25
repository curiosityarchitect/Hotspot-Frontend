import * as Location from "expo-location";
import { store } from "../redux/store/store";
import { updateLocation } from "../redux/actions/actions";
import updateUserLocation from "../services/user.location.service";

export const getLastLocation = async () => {
    let location = await Location.getLastKnownPositionAsync({});
    store.dispatch(updateLocation(location));
    updateUserLocation(location);
  }
  
export const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    store.dispatch(updateLocation(location));
    updateUserLocation(location);
}

export const beginTracking = async () => {
    await Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.BestForNavigation,
        },
        location => {
            // console.log(location)
            const oldLocation = store.getState().location;
            // only send request if user location has changed by a significant amount
            if (oldLocation && 
                (Math.abs(oldLocation.coords.longitude - location.coords.longitude) > 0.0001 ||
                Math.abs(oldLocation.coords.latitude - location.coords.latitude) > 0.0001)) {
                updateUserLocation(location);
            }

            store.dispatch(updateLocation(location));
        }
    )
};