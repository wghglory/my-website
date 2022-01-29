import Head from 'next/head';

import TheHeader from '@/components/header/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheHero from '@/components/TheHero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Derek Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TheHeader />

      <main className="">
        <section className="bg-gray-100 dark:bg-gray-900">
          <TheHero />
        </section>
      </main>

      <TheFooter />
    </div>
  );
}
