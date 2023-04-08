interface LoginAction {
    type: AuthActionTypes.LOGIN;
    payload: {
        token: string;
    };
}
interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}
export declare type AuthAction = LoginAction | LogoutAction;
export declare enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}
export {};
