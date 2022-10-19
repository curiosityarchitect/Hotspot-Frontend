import * as Location from "expo-location";
import { store } from "../redux/store/store";
import { updateLocation } from "../redux/actions/actions";

export const getLastLocation = async () => {
    let location = await Location.getLastKnownPositionAsync({});
    store.dispatch(updateLocation(location));
  }
  
export const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    store.dispatch(updateLocation(location));
}

export const beginTracking = async () => {
    await Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.BestForNavigation,
        },
        location => {
            // console.log(location)
            store.dispatch(updateLocation(location));
        }
    )
};