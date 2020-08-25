import axios from 'axios';

// let baseUrl = process.env.NODE_ENV === "production"? "http://120.24.63.27:2001" : "http://localhost:3000";
const baseUrl = "http://120.24.63.27:2001/api";
const request = axios.create({
    baseURL:baseUrl,
});

export default request;