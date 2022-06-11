import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/Styles/GlobalStyle';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
