export declare const useAuthStore: import("pinia").StoreDefinition<"auth", {
    token: string | null;
    userName: string;
    userIcon: string;
    userId: number | null;
}, {
    isLoggedIn: (state: {
        token: string | null;
        userName: string;
        userIcon: string;
        userId: number | null;
    } & import("pinia").PiniaCustomStateProperties<{
        token: string | null;
        userName: string;
        userIcon: string;
        userId: number | null;
    }>) => boolean;
}, {
    /**
     * @param token 認証トークン
     * @param userName ユーザー名
     * @param userIcon ユーザーアイコンのURL
     * @param userId ユーザーID
     */
    login(token: string, userName: string, userIcon: string, userId: number): void;
    /**
     * ログアウト処理を行います。
     */
    logout(): void;
}>;
