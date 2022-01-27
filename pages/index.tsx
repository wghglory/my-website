import Head from 'next/head';

import TheHeader from '@/components/header/TheHeader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Derek Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TheHeader />

      <main>
        <h1>Hi</h1>
        <p>Web Developer</p>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
