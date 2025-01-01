import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Rails サーバーの URL
    withCredentials: true, // CORS の設定が必要な場合は true に変更
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
export default apiClient;
