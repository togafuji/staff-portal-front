import type { LoginRequest, LoginResponse } from '@/entity/login.entity';
export declare const LoginRepository: {
    login(data: LoginRequest): Promise<import("axios").AxiosResponse<LoginResponse, any>>;
    logout(): Promise<void>;
};
