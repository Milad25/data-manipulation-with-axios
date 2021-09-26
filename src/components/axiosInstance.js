import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

// instance.defaults.headers.common['Authorization'] = 'INSTANCE_AUTH_TOKEN';

export default instance;
