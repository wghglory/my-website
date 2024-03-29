import Link from 'next/link';
import {useRouter} from 'next/router';
import {ReactNode} from 'react';
import {MdOutlineAccessTime} from 'react-icons/md';

import {TopicType} from '@/models';

import {ArticleLogo} from './ArticleSvgCover';

export default function AppCard({
  title,
  excerpt,
  date,
  slug,
  topics,
  path,
  children,
}: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  topics: string[];
  path?: string;
  children?: ReactNode;
}) {
  const router = useRouter();

  const href = path ? `${path}/${slug}` : `${router.pathname}/${slug}`;

  return (
    <div className="group flex flex-col bg-white dark:bg-gray-800 ">
      {/* post cover image into children */}
      {children}
      <div className="flex flex-1 flex-col gap-4 px-8 py-6 shadow-xs">
        <div className="flex-1 space-y-6">
          <header className="text-2xl font-semibold group-hover:text-king-500">
            <Link href={href}>
              <a className="inline-block w-full">{title}</a>
            </Link>
          </header>
          <p className="text-gray-500 dark:text-gray-400">{excerpt}</p>
        </div>
        <footer className="flex justify-between">
          <time className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MdOutlineAccessTime size="18" />
            {new Date(date).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          {router.pathname === '/snippets' && (
            <div className="flex gap-1">
              {topics.map((t) => (
                <span className="w-6" key={t}>
                  <ArticleLogo topic={t as TopicType} />
                </span>
              ))}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}
