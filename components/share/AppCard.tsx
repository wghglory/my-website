import Link from 'next/link';
import {useRouter} from 'next/router';
import {ReactNode} from 'react';

export default function AppCard({
  title,
  excerpt,
  date,
  slug,
  path,
  children,
}: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
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
          <header className="text-2xl font-semibold group-hover:text-king-500 lg:text-center">
            <Link href={href}>
              <a className="inline-block w-full">{title}</a>
            </Link>
          </header>
          <p className="text-gray-500 dark:text-gray-400">{excerpt}</p>
        </div>
        <time className="block font-serif text-xs text-gray-500 dark:text-gray-400">
          {new Date(date).toLocaleDateString()}
        </time>
      </div>
    </div>
  );
}
