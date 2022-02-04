import Head from 'next/head';

import ExperienceSection from '@/components/experience/ExperienceSection';
import TheHeader from '@/components/header/TheHeader';
import HeroSection from '@/components/hero/HeroSection';
import ProjectSection from '@/components/project/ProjectSection';
import TheFooter from '@/components/share/TheFooter';

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
        <ProjectSection />
      </main>

      <TheFooter />
    </div>
  );
}
