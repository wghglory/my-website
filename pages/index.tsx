import Head from 'next/head';

import ExperienceSection from '@/components/ExperienceSection';
import TheHeader from '@/components/header/TheHeader';
import HeroSection from '@/components/HeroSection';
import TheFooter from '@/components/TheFooter';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Derek Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TheHeader />

      <main>
        <HeroSection />
        <ExperienceSection />
      </main>

      <TheFooter />
    </div>
  );
}
