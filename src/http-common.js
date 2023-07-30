import axios from "axios";

const baseURLApp = "http://localhost:3300";
//  backend server URL, replace with deployed version link later

const axios_obj = axios.create({
    baseURL: baseURLApp, 
    headers: {
        "content-type": "application/json"
    }
})

export { baseURLApp, axios_obj };