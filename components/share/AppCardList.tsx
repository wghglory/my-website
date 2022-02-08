import {FileMeta} from '@/models';

import AppCard from '../share/AppCard';
import AppCardCover from './AppCardCover';

export default function AppCardList({files}: {files: FileMeta[]}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {files.map((f) => (
        <AppCard key={f.title} title={f.title} href={`/posts/${f.slug}`} excerpt={f.excerpt} date={f.date}>
          {f.cover_image && <AppCardCover cover_image={f.cover_image} />}
        </AppCard>
      ))}
    </div>
  );
}
