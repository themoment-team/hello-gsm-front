import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
