import type {GetStaticPaths, GetStaticProps} from 'next';

import ArticlePage from '@/components/share/ArticlePage';
import {getMdxFileStaticPaths, getMdxFileStaticProps} from '@/lib/file';
import {MDXFile} from '@/models';

export default function PostPage({file}: {file: MDXFile}) {
  return <ArticlePage file={file} />;
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string};
  const result = await getMdxFileStaticProps('posts', slug);
  // Add ISR (Incremental Static Regeneration) for better performance
  // Pages will be regenerated at most once per hour
  return {
    ...result,
    revalidate: 3600, // 1 hour in seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return getMdxFileStaticPaths('posts');
};
