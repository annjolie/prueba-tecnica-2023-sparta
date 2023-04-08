import { AuthActionTypes } from './actionTypes';
interface LoginAction {
    type: AuthActionTypes.LOGIN;
    payload: {
        token: string;
    };
}
interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}
export declare type Action = LoginAction | LogoutAction;
export declare const login: (token: string) => LoginAction;
export declare const logout: () => LogoutAction;
export {};
