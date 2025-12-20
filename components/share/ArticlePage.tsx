import Giscus from '@giscus/react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {MDXClient} from 'next-mdx-remote-client';
import {useTheme} from 'next-themes';

import TopicList from '@/components/share/TopicList';
import {ContentDirectory} from '@/lib/file';
import {MDXFile} from '@/models';

import {mdxComponents} from './MdxComponents';

// giscus currently converts title first letter to lower case, so let's use lowercase for now.
const titlePrefix = {
  projects: 'project',
  posts: 'post',
  snippets: 'snippet',
};

export default function ArticlePage({file}: {file: MDXFile}) {
  const router = useRouter();
  const {resolvedTheme} = useTheme();

  // /posts/[slug]
  const [, parentPath] = router.pathname.split('/');

  return (
    <article className="container prose mx-auto max-w-7xl px-8 py-10 dark:prose-invert md:prose-lg lg:prose-xl prose-a:text-queen-600 prose-a:no-underline hover:prose-a:text-queen-500 prose-pre:border prose-pre:border-gray-200 prose-img:rounded-xl dark:prose-a:text-queen-400 dark:hover:prose-a:text-queen-500 dark:prose-pre:border-0 sm:px-10 lg:p-20">
      <Head>
        <title>{`${titlePrefix[parentPath as ContentDirectory]}: ${file.meta.title}`}</title>
      </Head>
      <Link href={`/${parentPath}`} className="group mb-8 flex items-center gap-3">
        <svg
          className="rotate-90 duration-200 group-hover:-translate-x-2"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
            fill="currentColor"
          ></path>
        </svg>
        Back to overview
      </Link>
      <h1>{file.meta.title}</h1>
      <TopicList topics={file.meta.topics} />
      {file.meta.cover?.banner && (
        <div className="text-center">
          <img className="inline-block w-full" src={file.meta.cover.banner} alt="article cover" />
        </div>
      )}
      {'error' in file.source ? (
        <div>Error loading content: {file.source.error.message}</div>
      ) : (
        <MDXClient
          compiledSource={file.source.compiledSource}
          frontmatter={file.source.frontmatter}
          scope={file.source.scope}
          components={mdxComponents}
        />
      )}
      <div className="mb-4 mt-8 lg:mt-16">
        <Giscus
          repo="wghglory/my-website"
          repoId="R_kgDOGvOLfg"
          category="Announcements"
          categoryId="DIC_kwDOGvOLfs4CBEzx"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          theme={resolvedTheme}
        />
      </div>
    </article>
  );
}
