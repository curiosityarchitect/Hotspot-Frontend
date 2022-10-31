import { backendUrl } from "./const";
import axios from 'axios';

/*export async function setUser(username, email, password) {
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
}*/

export async function setUser(username, email, password) {
    if (!username || !email || !password)
        return;
    
    axios.post(`${backendUrl}/users`, 
    {
        username: username,
        email: email,
        password: password
    },
    {
        headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {console.log(err)});
}