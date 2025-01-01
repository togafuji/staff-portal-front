export declare const useUserStore: import("pinia").StoreDefinition<"user", {
    isLoggedIn: boolean;
    user: null;
}, {}, {
    login(username: string, password: string): Promise<void>;
    logout(): void;
}>;
