import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import axios from 'axios';

export default async function sendFriendRequest(externalUsername) {
    const clientUsername = store.getState().currUser.username;

    if (!clientUsername) {
        return;
    }

    return axios.post(`${backendUrl}/friend-requests`,
    {
        reciever: externalUsername,
        deliverer: clientUsername
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}