import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
