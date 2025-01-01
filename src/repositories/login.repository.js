// repositories/login.repository.ts
import axios from '@/axios';
import { LoginConstants } from '@/constants/login.constants';
export const LoginRepository = {
    async login(data) {
        return axios.post(LoginConstants.LOCAL_API_URL_LOGIN, {
            user: {
                email: data.email,
                password: data.password
            }
        });
    },
    async logout() {
        const token = localStorage.getItem('token');
        if (token) {
            await axios.delete(LoginConstants.LOCAL_API_URL_LOGOUT, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('token');
            localStorage.removeItem('userName');
            // localStorage.removeItem('userIcon');
        }
    }
};
