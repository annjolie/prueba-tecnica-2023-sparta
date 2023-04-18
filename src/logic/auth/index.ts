// Import required dependencies and action types
import {
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageSetItem
} from '../localStorage';
import { AuthAction, AuthActionTypes } from './actionTypes';
import type { Reducer } from '@reduxjs/toolkit';
// Define the initial state for authentication

export interface AuthState {
  token: string | null;
}

const initialAuthState: AuthState = {
  token: localStorageGetItem('authToken') || null
};

// Define the authReducer function to handle authentication actions
// define la funcion authReducer para manejar las acciones de autenticacion
export const authReducer: Reducer<AuthState> = (
  state = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      // Update token in local storage and return new state with token
      // actualiza el token en el local storage y devuelve un nuevo estado con el token
      localStorageSetItem('authToken', action.payload.token);
      return {
        ...state,
        token: action.payload.token
      };
    case AuthActionTypes.LOGOUT:
      // Clear token from local storage and return new state without token
      // limpia el token del local storage y devuelve un nuevo estado sin token
      localStorageRemoveItem('authToken');
      return {
        ...state,
        token: null
      };
    // Returns the current token
    // devuelve el token actual
    case AuthActionTypes.GET_TOKEN:
      return {
        ...state,
        token: localStorageGetItem('authToken')
      };
    default:
      return { ...state };
  }
};
