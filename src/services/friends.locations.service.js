import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import axios from 'axios';
import { updateFriendLocations } from "../redux/actions/actions";

export default async function setFriendLocations() {
    const userId = store.getState().currUser._id;

    if (!userId) {
        return;
    }

    axios.get(`${backendUrl}/users/${userId}/friends/locations`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        const friendLocationData = response.data;
        // console.log(friendLocationData);
        store.dispatch(updateFriendLocations(friendLocationData));
    })
    .catch((err) => {console.log("friends location failed", err)});
}