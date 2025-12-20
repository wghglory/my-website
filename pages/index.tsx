import {GetStaticProps} from 'next';

import ExperienceSection from '@/components/experience/ExperienceSection';
import HeroSection from '@/components/hero/HeroSection';
import ProjectSection from '@/components/project/ProjectSection';
import FeaturedPostsSection from '@/components/share/FeaturedPostsSection';
import {getAllFiles} from '@/lib/file';
import {FileMeta} from '@/models';

export default function IndexPage({projects, featuredPosts}: {projects: FileMeta[]; featuredPosts: FileMeta[]}) {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <FeaturedPostsSection posts={featuredPosts} />
      <ProjectSection projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllFiles('projects')
    .slice(0, 6)
    .map((f) => f.meta);

  const featuredPosts = getAllFiles('posts')
    .filter((f) => f.meta.featured)
    .slice(0, 6)
    .map((f) => f.meta);

  return {props: {projects, featuredPosts}};
};
