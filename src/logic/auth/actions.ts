import { AuthActionTypes } from './actionTypes';

interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: { token: string };
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type Action = LoginAction | LogoutAction;

export const login = (token: string): LoginAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: {
      token
    }
  };
};

export const logout = (): LogoutAction => {
  return {
    type: AuthActionTypes.LOGOUT
  };
};
