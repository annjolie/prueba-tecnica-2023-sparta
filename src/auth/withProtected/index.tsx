import { useRouter } from 'next/router';
import React, { ComponentType, useEffect } from 'react';
import { AuthActionTypes, GetTokenAction } from '../../logic/auth/actionTypes';
import { AuthState, authReducer } from '../../logic/auth';

// este archivo se encarga de proteger las rutas que no deben ser accesibles por usuarios no logueados
// si el usuario no esta logueado, se redirige a la ruta /login
// si el usuario esta logueado, se renderiza el componente que se le pasa como parametro

const WithProtected = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithProtectedComponent = (props: P) => {
    const router = useRouter();

    const action: GetTokenAction = { type: AuthActionTypes.GET_TOKEN };
    const initialState: AuthState | undefined = undefined;
    const { token } = authReducer(initialState, action);
    const isLoggedIn = !!token;
    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/login');
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return WithProtectedComponent;
};

export default WithProtected;
