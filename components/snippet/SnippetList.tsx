import {FileMeta} from '@/models';

import PostCard from './SnippetCard';

export default function SnippetList({snippets}: {snippets: FileMeta[]}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {snippets.map((s) => (
        <PostCard key={s.title} snippet={s} />
      ))}
    </div>
  );
}
