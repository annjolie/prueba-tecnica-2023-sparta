import React from 'react';
import {
  Container,
  LoginForm,
  UserInput,
  PasswordInput,
  LoginButton
} from './styles';

import { useLoginForm } from './logic';
export function LoginView(): JSX.Element {
  const {
    userValue,
    handleUserChange,
    onSubmit,
    passwordValue,
    handlePasswordChange
  } = useLoginForm();
  return (
    <Container>
      <LoginForm>
        <UserInput
          id='user'
          name='user-input'
          value={userValue}
          helpMessage='Enter your user name: e.g. test-user'
          onChange={(event) => handleUserChange(event.currentTarget.value)}
          placeholder='Enter your user'
          label='User'
          type='text'
        />
        <PasswordInput
          id='password'
          name='user-password'
          value={passwordValue}
          helpMessage='Enter your password: e.g. Test1234.'
          onChange={(event) => handlePasswordChange(event.currentTarget.value)}
          placeholder='Enter your password'
          label='Password'
          type='password'
        />
        <LoginButton label='Log in' variant='primary' onClick={onSubmit} />
      </LoginForm>
    </Container>
  );
}
