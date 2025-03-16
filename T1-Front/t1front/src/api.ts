import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:9090',
    headers:{
        "Access-Control-Allow-Origin":"*",
        'Content-Type':'application/json',
    }
})

export default api;