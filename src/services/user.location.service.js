import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import { updateMapEvents } from "../redux/actions/actions";
import axios from 'axios';

export default async function updateUserLocation(location) {
    if (!location)
        return;

    const userId = store.getState().currUser._id;

    axios.put(`${backendUrl}/users/${userId}/location`,
    {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
    },
    {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .catch((err) => {console.log(err)});
}