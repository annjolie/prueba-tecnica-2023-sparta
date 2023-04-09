interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: { token: string };
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}
