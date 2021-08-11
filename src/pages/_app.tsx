import Navbar from 'components/Nav-Bar';
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import React from 'react';
import GlobalStyles from 'styles/global';
import { AuthProvider } from 'context/auth';
import ToastContainerWrapper from 'components/Toast-Container';
import 'react-toastify/dist/ReactToastify.min.css';

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

      <AuthProvider>
        <Navbar />

        <Component {...pageProps} />
        <ToastContainerWrapper />
      </AuthProvider>
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
