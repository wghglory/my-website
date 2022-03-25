import {GetStaticProps} from 'next';

import ArticleListPage from '@/components/share/ArticleListPage';
import {getMdxFilesStaticProps} from '@/lib/file';
import {FileMeta} from '@/models';

export default function SnippetsPage({files, topics}: {files: FileMeta[]; topics: string[]}) {
  return <ArticleListPage files={files} topics={topics} title="Snippets" />;
}

export const getStaticProps: GetStaticProps = async () => {
  return getMdxFilesStaticProps('snippets');
};
