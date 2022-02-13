import {GetStaticProps} from 'next';

import ArticleListPage from '@/components/share/ArticleListPage';
import {getMdxFilesStaticProps} from '@/lib/file';
import {FileMeta} from '@/models';

export default function PostsPage({files, topics}: {files: FileMeta[]; topics: string[]}) {
  return (
    <main>
      <ArticleListPage files={files} topics={topics} title="Posts" />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return getMdxFilesStaticProps('posts');
};
