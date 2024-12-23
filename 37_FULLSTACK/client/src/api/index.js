import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5555/api' });

export const createPhone = data => axiosInstance.post('/phones', data);

export const getPhones = () => axiosInstance.get('/phones');

export const deletePhone = id => axiosInstance.delete(`/phones/${id}`);

export const getBrands = () => axiosInstance.get('/brands');
