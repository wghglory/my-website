// TODO: may remove or refactor

import type {GetStaticPaths, GetStaticProps} from 'next';
import Head from 'next/head';

import PostList from '@/components/blog/PostList';
import {getAllPosts} from '@/lib/post';
import {PostMeta} from '@/models/post';

export default function TopicPage({topic, posts}: {topic: string; posts: PostMeta[]}) {
  return (
    <>
      <Head>
        <title>Topic: {topic}</title>
      </Head>
      <h1>Topic: {topic}</h1>
      {/* <PostList posts={posts} /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as {slug: string};
  const posts = getAllPosts().filter((post) => post.meta.topics.includes(slug));

  return {
    props: {
      topic: slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const topics = new Set(posts.map((post) => post.meta.topics).flat());
  const paths = Array.from(topics).map((topic) => ({params: {slug: topic}}));

  return {
    paths,
    fallback: false,
  };
};
