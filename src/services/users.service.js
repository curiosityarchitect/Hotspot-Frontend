import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import { updateMapEvents } from "../redux/actions/actions";
import axios from 'axios';

export async function setUser(username, email, password) {
    if (!username || !email || !password)
        return;

    axios.post(`${backendUrl}/users`, 
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }, 
        data: {
            username: username,
            email: email,
            password: password
        }
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {console.log(err)});
}