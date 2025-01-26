import axios from 'axios';

export const baseURL = 'https://tech-test-backend.dwsbrazil.io';

export const httpInstance = axios.create({
  baseURL,
});
