import { backendUrl } from "./const";
import axios from 'axios';

export async function createUser(username, email, password) {
    return axios.post(`${backendUrl}/users`, 
    {
        username: username,
        email: email,
        password: password
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export async function getUser(username, password) {
    return axios.post(`${backendUrl}/login`, 
    {
        username: username,
        password: password
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}