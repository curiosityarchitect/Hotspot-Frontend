import { backendUrl } from "./const";
import axios from 'axios';

export async function dummyHit() {
    axios.post(`${backendUrl}/dummy`, 
    {
        "message": "hiiii :3"
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {console.log(err)});
}