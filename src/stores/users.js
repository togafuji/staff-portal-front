import { defineStore } from 'pinia';
import axios from '@/axios';
export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        user: null
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await axios.post('/users/login', {
                    username: username,
                    password: password
                });
                this.user = response.data.user;
                this.isLoggedIn = true;
                // 例えば JWT トークンをローカルストレージに保存する処理などを追加
            }
            catch (error) {
                console.error('Login failed:', error);
                throw new Error('ログインに失敗しました。');
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
            // トークンをローカルストレージから削除する処理などを追加
        }
    }
});
