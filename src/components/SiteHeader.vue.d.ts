declare const _default: import("vue").DefineComponent<{}, {
    authStore: import("pinia").Store<"auth", {
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
        login(token: string, userName: string, userIcon: string, userId: number): void;
        logout(): void;
    }>;
    handleLogout: () => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
