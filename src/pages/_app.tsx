import '../styles/font.css';
import themes from '../styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { connect, Provider } from 'react-redux';
import rootReducer from '../logic/reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
