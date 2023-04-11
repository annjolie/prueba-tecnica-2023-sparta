import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import WithProtected from '../auth/withProtected';

const DashboardPage: NextPage = () => (
  <>
    <Head>
      <title>LongevityOne | Dashboard</title>
      <meta name='description' content='Ride in the front' />
    </Head>
    <main>
      <h1>Dashboard</h1>
    </main>
  </>
);

export default WithProtected(DashboardPage);
