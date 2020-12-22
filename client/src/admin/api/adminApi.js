import axiosClient from './axiosClient';

const adminApi = {
    login(data) {
        const url = '/login';
        return axiosClient.post(url, data);
    },
}

export default adminApi;