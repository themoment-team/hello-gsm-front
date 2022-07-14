import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/Styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
