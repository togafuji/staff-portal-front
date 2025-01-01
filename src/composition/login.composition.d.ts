export declare function useAuth(): {
    email: import("vue").Ref<string, string>;
    password: import("vue").Ref<string, string>;
    error: import("vue").Ref<string | null, string | null>;
    login: () => Promise<void>;
    logout: () => Promise<void>;
};
