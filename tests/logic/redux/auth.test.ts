import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../../src/logic/redux/auth';
import { login, logout } from '../../../src/logic/redux/actions';

describe('authReducer', () => {
  it('handles actions of type LOGIN', () => {
    const action = login('123');
    const newState = authReducer({ token: null }, action);
    expect(newState.token).toEqual('123');
  });

  it('handles actions of type LOGOUT', () => {
    const action = logout();
    const newState = authReducer({ token: '123' }, action);
    expect(newState.token).toEqual(null);
  });

  it('handles action with unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = authReducer({ token: null }, action as any);
    expect(newState.token).toEqual(null);
  });

  it('should persist the token when loginSuccess is dispatched', () => {
    const store = configureStore({
      reducer: { auth: authReducer }
    });
    const token = '1234';
    store.dispatch(login(token));
    expect(store.getState().auth.token).toEqual(token);
  });
});
