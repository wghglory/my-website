import type {GetStaticPaths, GetStaticProps} from 'next';

import ArticlePage from '@/components/share/ArticlePage';
import {getMdxFileStaticPaths, getMdxFileStaticProps} from '@/lib/file';
import {MDXFile} from '@/models';

export default function ProjectPage({file}: {file: MDXFile}) {
  return (
    <main>
      <ArticlePage file={file} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string};
  return getMdxFileStaticProps('projects', slug);
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getMdxFileStaticPaths('projects');
};
