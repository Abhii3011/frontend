import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-production-6cbe.up.railway.app/', // Replace with your backend URL

  timeout: 10000,
  withCredentials: true, // Enable sending cookies with requests
});

export default instance;