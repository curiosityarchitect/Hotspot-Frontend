import {backendUrl} from './const';
import axios from 'axios';

export async function sendRequest(deliverer, receiver) {
    axios.post(`${backendUrl}/friend-requests`,
    {
        receiver: receiver,
        deliverer: deliverer
    }, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }) 
}

export async function getRequests(username) {
    axios.get(`${backendUrl}/friend-requests/${username}`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export async function acceptRequest(username, deliverer) {
    axios.post(`${backendUrl}/friend-requests/status/${username}/accept`,
    {
        deliverer: deliverer
    }, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export async function rejectRequest(username, deliverer) {
    axios.post(`${backendUrl}/friend-requests/status/${username}/reject`,
    {
        deliverer: deliverer
    }, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

//helper function, call to check if friend relation exists
export async function isFriends(username,deliverer) {
    axios.get(`${backendUrl}/friend-requests/status/${username}`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}