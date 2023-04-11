interface LoginAction {
    type: AuthActionTypes.LOGIN;
    payload: {
        token: string;
    };
}
export interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}
export interface GetTokenAction {
    type: AuthActionTypes.GET_TOKEN;
}
export declare type AuthAction = LoginAction | LogoutAction | GetTokenAction;
export declare enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    GET_TOKEN = "GET_TOKEN"
}
export {};
