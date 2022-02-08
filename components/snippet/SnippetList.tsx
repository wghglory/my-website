import {FileMeta} from '@/models';

import AppCard from '../share/AppCard';

export default function SnippetList({snippets}: {snippets: FileMeta[]}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {snippets.map((s) => (
        <AppCard key={s.title} title={s.title} href={`/snippets/${s.slug}`} excerpt={s.excerpt} date={s.date}></AppCard>
      ))}
    </div>
  );
}
