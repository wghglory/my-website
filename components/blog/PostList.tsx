import React from 'react';

import {PostMeta} from '@/models/post';

import PostCard from './PostCard';

export default function PostList({posts}: {posts: PostMeta[]}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.title} post={p} />
      ))}
    </div>
  );
}
