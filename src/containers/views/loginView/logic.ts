import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from '../../../logic/auth/actions';

import { loginHandler } from '../../../logic/api';

export const useLoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const result = await loginHandler();
      dispatch(LogIn(result.token));
      router.replace('/');
    },
    [loginHandler, dispatch, LogIn, router]
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
