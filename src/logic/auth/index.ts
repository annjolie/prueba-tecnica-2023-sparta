// Import required dependencies and action types
import { AuthAction, AuthActionTypes } from './actionTypes';

// Define the initial state for authentication
export interface AuthState {
  token: string | null;
}

const initialAuthState: AuthState = {
  token: localStorage.getItem('authToken') || null
};

// Define the authReducer function to handle authentication actions
export const authReducer = (
  state = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      // Update token in local storage and return new state with token
      localStorage.setItem('authToken', action.payload.token);
      return {
        ...state,
        token: action.payload.token
      };
    case AuthActionTypes.LOGOUT:
      // Clear token from local storage and return new state without token
      localStorage.removeItem('authToken');
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};
