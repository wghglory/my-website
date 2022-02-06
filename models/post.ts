import {MDXRemoteSerializeResult} from 'next-mdx-remote';

export interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  topics: string[];
  date: string;
  cover_image: string;
}

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}
