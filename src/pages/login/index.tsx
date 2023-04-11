import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { LoginView } from '../../containers/views/loginView';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spart | Login</title>
        <meta name='description' content='Sparta Test login view' />
      </Head>
      <LoginView />
    </>
  );
};

export default LoginPage;
