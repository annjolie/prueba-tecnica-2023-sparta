import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import WithProtected from '../auth/withProtected';

import { DashboardView } from '../containers/views/dashboardView';

const DashboardPage: NextPage = () => (
  <>
    <Head>
      <title>Sparta</title>
      <meta name='description' content='Ride in the front' />
    </Head>
    <DashboardView />
  </>
);

export default WithProtected(DashboardPage);
