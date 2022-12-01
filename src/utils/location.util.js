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
            accuracy: Location.Accuracy.High,
            distanceInterval: 15
        },
        location => {
            // console.log(location)
            updateUserLocation(location);

            store.dispatch(updateLocation(location));
        }
    )
};

export const watchEventVicinity = async () => {
    
}