import 'highlight.js/styles/night-owl.css';

import {Giscus} from '@giscus/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {MDXRemote} from 'next-mdx-remote';
import {useTheme} from 'next-themes';

import Bilibili from '@/components/share/Bilibili';
import TopicList from '@/components/share/TopicList';
import YouTube from '@/components/share/Youtube';
import {ContentDirectory} from '@/lib/file';
import {MDXFile} from '@/models';

const titlePrefix = {
  projects: 'Project',
  posts: 'Post',
  snippets: 'Snippet',
};

export default function ArticlePage({file}: {file: MDXFile}) {
  const router = useRouter();
  const {theme} = useTheme();

  // /posts/[slug]
  const [, parentPath] = router.pathname.split('/');

  return (
    <article className="container prose mx-auto max-w-7xl  px-8 py-10 prose-a:text-queen-600 prose-a:no-underline hover:prose-a:text-queen-500 prose-pre:bg-[#011627] prose-img:rounded-xl dark:prose-invert dark:prose-a:text-queen-400 dark:hover:prose-a:text-queen-500 sm:px-10 md:prose-lg lg:prose-xl lg:p-20">
      <Head>
        <title>
          {titlePrefix[parentPath as ContentDirectory]}: {file.meta.title}
        </title>
      </Head>
      <Link href={`/${parentPath}`}>
        <a className="group mb-8 flex items-center gap-3">
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
        </a>
      </Link>
      <h1>{file.meta.title}</h1>
      <TopicList topics={file.meta.topics} />
      {file.meta.cover_image && (
        <div className="text-center">
          <img className="inline-block w-full" src={file.meta.cover_image} alt="article cover" loading="lazy" />
        </div>
      )}
      <MDXRemote {...file.source} components={{YouTube, Bilibili, Image}} />
      <div className="my-4">
        <Giscus
          repo="wghglory/my-website"
          repoId="R_kgDOGvOLfg"
          category="Announcements"
          categoryId="DIC_kwDOGvOLfs4CBEzx"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          theme={theme}
        />
      </div>
    </article>
  );
}
