import { AuthAction } from './actionTypes';
export interface AuthState {
    token: string | null;
}
export declare const authReducer: (state: AuthState | undefined, action: AuthAction) => AuthState;
