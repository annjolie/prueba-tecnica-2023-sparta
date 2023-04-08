export interface LoginResponse {
    token: string;
}
export declare const loginHandler: () => Promise<LoginResponse>;
