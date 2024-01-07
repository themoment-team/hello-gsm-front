import type { AppProps } from 'next/app';

import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from 'styles/GlobalStyle';

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
