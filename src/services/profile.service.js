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