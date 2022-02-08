import {GetStaticProps} from 'next';

import ExperienceSection from '@/components/experience/ExperienceSection';
import HeroSection from '@/components/hero/HeroSection';
import ProjectSection from '@/components/project/ProjectSection';
import {getAllFiles} from '@/lib/file';
import {FileMeta} from '@/models';

export default function IndexPage({projects}: {projects: FileMeta[]}) {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection projects={projects} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllFiles('projects')
    .slice(0, 6)
    .map((f) => f.meta);

  return {props: {projects}};
};
