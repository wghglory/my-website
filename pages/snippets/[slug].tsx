import 'highlight.js/styles/night-owl.css';

import type {GetStaticPaths, GetStaticProps} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {MDXRemote} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

import TopicList from '@/components/share/TopicList';
import YouTube from '@/components/share/Youtube';
import {getFileFromSlug, getSlugs} from '@/lib/file';
import {MDXFile} from '@/models';

export default function SnippetPage({file}: {file: MDXFile}) {
  return (
    <article className="container prose mx-auto max-w-7xl  px-8 py-10 prose-a:text-queen-600 prose-a:no-underline hover:prose-a:text-queen-500 prose-pre:bg-[#011627] prose-img:rounded-xl dark:prose-invert dark:prose-a:text-queen-400 dark:hover:prose-a:text-queen-500 sm:px-10 md:prose-lg lg:prose-xl lg:p-20">
      <Head>
        <title>{file.meta.title}</title>
      </Head>
      <Link href="/snippets">
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
      <MDXRemote {...file.source} components={{YouTube, Image}} />
    </article>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string};
  const {content, meta} = getFileFromSlug('snippets', slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: 'wrap'}], rehypeHighlight] as any,
    },
  });

  return {props: {file: {source: mdxSource, meta}}};
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('snippets').map((slug) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  };
};
