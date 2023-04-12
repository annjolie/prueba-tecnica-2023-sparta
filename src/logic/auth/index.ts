// Import required dependencies and action types
import {
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageSetItem
} from '../localStorage';
import { AuthAction, AuthActionTypes } from './actionTypes';

// Define the initial state for authentication

export interface AuthState {
  token: string | null;
}

const initialAuthState: AuthState = {
  token: localStorageGetItem('authToken') || null
};

// Define the authReducer function to handle authentication actions
export const authReducer = (
  state = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      // Update token in local storage and return new state with token
      localStorageSetItem('authToken', action.payload.token);
      return {
        ...state,
        token: action.payload.token
      };
    case AuthActionTypes.LOGOUT:
      // Clear token from local storage and return new state without token
      localStorageRemoveItem('authToken');
      return {
        ...state,
        token: null
      };
    // Returns the current token
    case AuthActionTypes.GET_TOKEN:
      return {
        ...state,
        token: localStorageGetItem('authToken')
      };
    default:
      return state;
  }
};
