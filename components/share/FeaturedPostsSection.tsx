import Link from 'next/link';

import {FileMeta} from '@/models';

import AppCard from './AppCard';
import AppCardCover from './AppCardCover';
import SectionLayout from './SectionLayout';

export default function FeaturedPostsSection({posts}: {posts: FileMeta[]}) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <SectionLayout id="featured-posts" title="Featured Posts">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <AppCard
            key={post.slug}
            title={post.title}
            path="/posts"
            slug={post.slug}
            excerpt={post.excerpt}
            date={post.date}
            topics={post.topics}
          >
            {post.cover && <AppCardCover ArticleCover={post.cover} />}
          </AppCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/posts" className="btn-secondary group">
          View more posts
          <svg
            className="w-5 -rotate-90 duration-200 group-hover:translate-x-2"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </SectionLayout>
  );
}
