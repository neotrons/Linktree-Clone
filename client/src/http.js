import axios from 'axios';
import { enviroment } from './config';

export const httpClient = axios.create({
  baseURL: enviroment.apiUrl
});