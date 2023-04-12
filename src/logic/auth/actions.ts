import { AuthActionTypes } from './actionTypes';

export const LogOut = () => ({
  type: AuthActionTypes.LOGOUT
});

export const LogIn = (token: string) => ({
  type: AuthActionTypes.LOGIN,
  payload: { token: token }
});
