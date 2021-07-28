import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/animate.css';

import 'styles/smartmenus-bootstrap.css';
import 'styles/swiper.css';
import 'styles/magnific-popup.css';
import 'styles/lana-pet-icon.css';
import 'styles/lana-pet-theme.css';
import 'styles/lana-pet-print.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adote um Pet</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link
          rel="stylesheet"
          id="montserrat-css"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        />
        <link
          rel="stylesheet"
          id="open-sans-css"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i"
        />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Esse é um site para adoção, doação e cuidados dos nossos queridos pets"
        />
      </Head>

      <Component {...pageProps} />
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
