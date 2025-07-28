// pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import '@/lib/fontawesome';

import '../styles/globals.css'; // Import global styles
import '../styles/sliderStyle.css'; // Import slider styles
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Sholapith - a platform for shola art and crafts</title>
        <meta name="description" content="Sholapith is a platform for various shola arts and crafts." />

        <meta name="keywords" content="sholapith, shola, shola art, shola boat, shola hawdah" />

        <meta property="og:title" content="Sholapith - a platform for shola art and crafts" />
        <meta property="og:description" content="Sholapith is a platform for various shola arts and crafts." />

        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="Sholapith - a platform for shola art and crafts" />
        <meta name="twitter:image" content="/og-image.jpg" />

        <link rel="canonical" href="https://www.sholapith.com/" />
      </Head>


      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
