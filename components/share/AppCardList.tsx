import {FileMeta} from '@/models';

import AppCard from '../share/AppCard';
import AppCardCover from './AppCardCover';

export default function AppCardList({files, path}: {files: FileMeta[]; path?: string}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {files.map((f) => (
        <AppCard key={f.title} title={f.title} path={path} slug={f.slug} excerpt={f.excerpt} date={f.date}>
          {f.cover && <AppCardCover ArticleCover={f.cover} />}
        </AppCard>
      ))}
    </div>
  );
}
