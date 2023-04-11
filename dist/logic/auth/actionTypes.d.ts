interface LoginAction {
    type: AuthActionTypes.LOGIN;
    payload: {
        token: string;
    };
}
export interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}
export declare type AuthAction = LoginAction | LogoutAction;
export declare enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}
export {};
