import {PostMeta} from '@/models/post';

import PostCard from './PostCard';

export default function PostList({
  posts,
  syncInputWithQuery,
  term,
}: {
  posts: PostMeta[];
  syncInputWithQuery: (val: string) => void;
  term: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.title} post={p} syncInputWithQuery={syncInputWithQuery} term={term} />
      ))}
    </div>
  );
}
