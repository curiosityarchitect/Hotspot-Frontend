import {backendUrl} from './const';
import axios from 'axios';

export async function sendRequest() {
    axios.post(`${backendUrl}/friend-requests`, 
    {
        reciever: 'Spongebob',
        deliverer:'Gary'
    },
    {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {console.log(err)});
  
}