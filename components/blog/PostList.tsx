import React, {Dispatch, SetStateAction} from 'react';

import {PostMeta} from '@/models/post';

import PostCard from './PostCard';

export default function PostList({
  posts,
  setTerm,
  term,
}: {
  posts: PostMeta[];
  setTerm: Dispatch<SetStateAction<string>>;
  term: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.title} post={p} setTerm={setTerm} term={term} />
      ))}
    </div>
  );
}
