export interface LoginResponse {
    token: string;
}
export declare const loginHandler: () => Promise<LoginResponse>;
export declare const logoutHandler: () => Promise<void>;
