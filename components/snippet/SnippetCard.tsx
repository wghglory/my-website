import Link from 'next/link';

import type {FileMeta} from '@/models';

export default function SnippetCard({snippet}: {snippet: FileMeta}) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white hover:border-king-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-king-400">
      <div className="flex flex-1 flex-col gap-4 px-8 py-6">
        <div className="flex-1 space-y-6">
          <header className="text-2xl font-semibold lg:text-center">
            <Link href={`/snippets/${snippet.slug}`}>
              <a className="block hover:text-king-500">{snippet.title}</a>
            </Link>
          </header>
          <p className="text-gray-500">{snippet.excerpt}</p>
        </div>
        <time className="block font-serif text-xs text-gray-500">{new Date(snippet.date).toLocaleDateString()}</time>
      </div>
    </div>
  );
}
