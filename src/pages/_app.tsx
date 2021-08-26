import Navbar from 'components/Navbar';
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import GlobalStyles from 'styles/global';
import { AuthProvider } from 'context/auth';
import ToastContainerWrapper from 'components/ToastContainer';
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.min.css';
import { ModalProvider } from 'styled-react-modal';

import AppProvider from 'context/index';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adote um Pet</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Esse é um site para adoção, doação e cuidados dos nossos queridos pets"
        />
      </Head>
      <GlobalStyles />

      <AppProvider>
        <Navbar />
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
        <ToastContainerWrapper />
      </AppProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
