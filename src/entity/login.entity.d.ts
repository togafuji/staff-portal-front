export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    token: string;
    username: string;
    userIconUrl?: string;
    userId?: number;
}
