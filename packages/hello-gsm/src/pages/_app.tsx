import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useGetLogged from 'hooks/useGetLogged';
import { useMiddleware } from 'hooks/useMiddleware';
import * as gtag from 'lib/gtag';

import { ChannelTalk, Footer, Header } from 'components';

import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useGetLogged();
  useMiddleware();

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer />
        {router.pathname !== '/inspection' && <Header />}
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      {router.pathname !== '/application' && <ChannelTalk />}
    </>
  );
}

export default MyApp;
