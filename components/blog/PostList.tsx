import {FileMeta} from '@/models';

import AppCard from '../share/AppCard';
import PostCover from './PostCover';

export default function PostList({posts}: {posts: FileMeta[]}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((p) => (
        <AppCard key={p.title} title={p.title} href={`/posts/${p.slug}`} excerpt={p.excerpt} date={p.date}>
          <PostCover cover_image={p.cover_image} />
        </AppCard>
      ))}
    </div>
  );
}
