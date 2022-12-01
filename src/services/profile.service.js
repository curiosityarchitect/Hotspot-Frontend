import { backendUrl } from "./const";
import axios from 'axios';
import { RotateInUpLeft } from "react-native-reanimated";



export async function updateProfile(displayName,phoneNumber,displayLocation,username,newusername, profTags) {
    return axios.put(`${backendUrl}/profile/${username}/settings`, 
    {
        displayName: displayName,
        phoneNumber: phoneNumber,
        displayLocation: displayLocation,
        username: newusername,
        profTags: profTags
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export async function newUser(username) {
    return axios.post(`${backendUrl}/profile/${username}/settings`,
    {
        displayName: 'No display name set',
        displayLocation: 'No location set',
        phoneNumber: 'No phone number set',
        profTags: 'Add tags',
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export async function getUpdatedProfile(username) {
    return axios.get(`${backendUrl}/profile/${username}/settings`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      } 
    })
}