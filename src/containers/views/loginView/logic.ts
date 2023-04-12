import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { loginHandler } from '../../../logic/api';
import { authReducer } from '../../../logic/auth';
import { AuthActionTypes } from '../../../logic/auth/actionTypes';

export const useLoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const result = await loginHandler();
      const action = {
        type: AuthActionTypes.LOGIN,
        payload: { token: result.token }
      };
      authReducer({ token: null }, action);
      router.push('/');
    },
    [loginHandler, authReducer]
  );

  const handleUserChange = useCallback(
    (value: string) => {
      setUser(value);
    },
    [setUser]
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      setPassword(value);
    },
    [setPassword]
  );

  return {
    userValue: user,
    handleUserChange,
    passwordValue: password,
    handlePasswordChange,
    onSubmit
  };
};