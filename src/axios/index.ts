import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.BASE_API_URL,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default instance;
