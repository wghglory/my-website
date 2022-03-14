import {MDXRemoteSerializeResult} from 'next-mdx-remote';

import type {XOR} from '@/lib/typescript';

export type ArticleCover = XOR<
  {
    banner: string; // /posts/vue-libraries.svg
  },
  {
    topic: TopicType; // Vue
    title: string; // Vue
    subtitle: string; // Vue Library
  }
>;

// projects, snippets, posts all have these meta
export interface FileMeta {
  excerpt: string;
  slug: string;
  title: string;
  date: string;
  // Post has both, Project only has cover, Snippet only has topics
  topics: string[];
  // cover can be either A or B, mutual.
  cover: ArticleCover;
}

export interface FileContent {
  content: string;
  meta: FileMeta;
}

export interface MDXFile {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: FileMeta;
}

export type TopicType =
  | 'Cypress'
  | 'Vue'
  | 'React'
  | 'Angular'
  | 'Docker'
  | 'Figma'
  | 'Flutter'
  | 'Jest'
  | 'Kubernetes'
  | 'Mongodb'
  | 'Nextjs'
  | 'Nodejs'
  | 'Nuxt'
  | 'Tailwind'
  | 'Typescript'
  | 'AI'
  | 'AE'
  | 'PS';
