import fs from 'fs';
import {sync} from 'glob';
import matter from 'gray-matter';
import path from 'path';

import {Post} from '@/models/post';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSlugs = (): string[] => {
  const paths = sync(`${postsDirectory}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, ext] = fileName.split('.');
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      return new Date(a.meta.date).getTime() - new Date(b.meta.date).getTime();
    });
  return posts;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(postPath, 'utf8');
  const {content, data} = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      cover_image: data.cover_image ?? '',
    },
  };
};
