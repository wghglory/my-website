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

  const href = path ? `${path}/${slug}` : `${router.asPath}/${slug}`;

  return (
    <Link href={href}>
      <a className="group flex flex-col rounded-xl border border-gray-200 bg-white hover:border-king-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-king-400">
        {/* post cover image into children */}
        {children}
        <div className="flex flex-1 flex-col gap-4 px-8 py-6">
          <div className="flex-1 space-y-6">
            <header className="text-2xl font-semibold group-hover:text-king-500 lg:text-center">{title}</header>
            <p className="text-gray-500">{excerpt}</p>
          </div>
          <time className="block font-serif text-xs text-gray-500">{new Date(date).toLocaleDateString()}</time>
        </div>
      </a>
    </Link>
  );
}
