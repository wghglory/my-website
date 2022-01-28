import Head from 'next/head';

import AppModalTest from '@/components/AppModalTest';
import TheHeader from '@/components/header/TheHeader';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Derek Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TheHeader />

      <AppModalTest />

      <main className="">
        <section className=" bg-gray-100">
          <div className="container m-auto px-6 py-12">
            <h1>Hi</h1>
            <p>Web Developer</p>
            <h1>Hi</h1>
            <p>Web Developer</p>
            <h1>Hi</h1>
            <p>Web Developer</p>
            <h1>Hi</h1>
            <p>Web Developer</p>
            <h1>Hi</h1>
            <p>Web Developer</p>
            <h1>Hi</h1>
            <p>Web Developer</p>
            <h1>Hi</h1>
            <p>Web Developer</p>
          </div>
        </section>
      </main>

      <footer>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </footer>
    </div>
  );
}
