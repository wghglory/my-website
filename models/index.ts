import {MDXRemoteSerializeResult} from 'next-mdx-remote';

// projects, snippets, posts all have these meta
export interface FileMeta {
  excerpt: string;
  slug: string;
  title: string;
  date: string;
  // Post has both, Project only has cover_image, Snippet only has topics
  topics: string[];
  cover_image: string;
}

export interface FileContent {
  content: string;
  meta: FileMeta;
}

export interface MDXFile {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: FileMeta;
}
