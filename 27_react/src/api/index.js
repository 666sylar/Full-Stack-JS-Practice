import Axios from 'axios';

const axiosInstance = Axios.create({ baseURL: 'https://randomuser.me/api/' });

export const getUser = () => axiosInstance.get('?results=1&seed=sylar');
