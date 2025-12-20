import fs from 'fs';
import {sync} from 'glob';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote-client/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import remarkGfm from 'remark-gfm';

import {FileContent} from '@/models';

export type ContentDirectory = 'posts' | 'projects' | 'snippets';

export const getSlugs = (dir: ContentDirectory): string[] => {
  const paths = sync(path.join(process.cwd(), `content/${dir}/*.mdx`));

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, ext] = fileName.split('.');
    return slug;
  });
};

export const getAllFiles = (dir: ContentDirectory) => {
  const files = getSlugs(dir)
    .map((slug) => getFileFromSlug(dir, slug))
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
  return files;
};

export const getFileFromSlug = (dir: ContentDirectory, slug: string): FileContent => {
  const filePath = path.join(process.cwd(), `content/${dir}`, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const {content, data} = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      date: (data.date ?? new Date()).toString(),
      topics: (data.topics ?? []).sort(),
      cover: data.cover ?? null,
    },
  };
};

export function getMdxFilesStaticProps(dir: ContentDirectory) {
  const files = getAllFiles(dir)
    // .slice(0, 9)
    .map((f) => f.meta);

  const topics = Array.from(new Set(files.map((f) => f.topics).flat()));

  return {props: {files, topics}};
}

export const getMdxFileStaticProps = async (dir: ContentDirectory, slug: string) => {
  const {content, meta} = getFileFromSlug(dir, slug);
  const mdxSource = await serialize({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, // support markdown tables
        ],
        rehypePlugins: [
          rehypeSlug,
          rehypeExternalLinks,
          [
            rehypeToc,
            {
              headings: ['h1', 'h2'],
            },
          ],
          [rehypeAutolinkHeadings, {behavior: 'prepend'}],
          rehypePrism,
        ] as any,
      },
    },
  });

  return {props: {file: {source: mdxSource, meta}}};
};

export const getMdxFileStaticPaths = (dir: ContentDirectory) => {
  const paths = getSlugs(dir).map((slug) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  };
};
