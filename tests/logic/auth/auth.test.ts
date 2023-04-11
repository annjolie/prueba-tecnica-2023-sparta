import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../../src/logic/auth';
import { loginHandler, logoutHandler } from '../../../src/logic/api';
import {
  AuthActionTypes,
  GetTokenAction,
  LogoutAction
} from '../../../src/logic/auth/actionTypes';

// Mock the uuidv4 function to always return a specific UUID
jest.mock('uuid', () => ({
  v4: () => 'mock-uuid'
}));

describe('authReducer', () => {
  it('handles actions of type LOGIN', async () => {
    const response = await loginHandler();
    const action = {
      type: AuthActionTypes.LOGIN,
      payload: { token: response.token }
    };
    const newState = authReducer({ token: null }, action);
    expect(newState.token).toEqual('mock-uuid');
  });

  it('handles actions of type LOGOUT', async () => {
    await logoutHandler();
    const action: LogoutAction = {
      type: AuthActionTypes.LOGOUT
    };
    const newState = authReducer({ token: '123' }, action);
    expect(newState.token).toEqual(null);
  });

  it('handles actions of type GET_TOKEN', async () => {
    await logoutHandler();
    const action: GetTokenAction = {
      type: AuthActionTypes.GET_TOKEN
    };
    const newState = authReducer({ token: '123' }, action);
    expect(newState.token).toEqual('123');
  });

  it('handles action with unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = authReducer({ token: null }, action as any);
    expect(newState.token).toEqual(null);
  });

  it('should persist the token when loginSuccess is dispatched', async () => {
    const store = configureStore({
      reducer: { auth: authReducer }
    });
    const response = await loginHandler();
    const action = {
      type: AuthActionTypes.LOGIN,
      payload: { token: response.token }
    };
    store.dispatch(action);
    expect(store.getState().auth.token).toEqual(response.token);
  });
});
