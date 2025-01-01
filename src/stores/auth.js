// src/stores/auth.ts
import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        userName: localStorage.getItem('userName') || 'ゲスト',
        userIcon: localStorage.getItem('userIcon') || '/noimage.png',
        userId: localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null // 修正: number | null に変更
    }),
    getters: {
        isLoggedIn: (state) => !!state.token
    },
    actions: {
        /**
         * @param token 認証トークン
         * @param userName ユーザー名
         * @param userIcon ユーザーアイコンのURL
         * @param userId ユーザーID
         */
        login(token, userName, userIcon, userId) {
            this.token = token;
            this.userName = userName;
            this.userIcon = userIcon;
            this.userId = userId;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userIcon', userIcon);
            localStorage.setItem('userId', userId.toString()); // 修正: number を string に変換して保存
        },
        /**
         * ログアウト処理を行います。
         */
        logout() {
            this.token = null;
            this.userName = 'ゲスト';
            this.userIcon = '/noimage.png';
            this.userId = null;
            localStorage.removeItem('token');
            localStorage.removeItem('userName');
            localStorage.removeItem('userIcon');
            localStorage.removeItem('userId');
        }
    }
});
