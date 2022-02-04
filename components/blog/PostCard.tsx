import Link from 'next/link';

import type {PostMeta} from '@/models/post';

export default function PostCard({post}: {post: PostMeta}) {
  return (
    <div className="flex flex-col rounded-xl border-2 border-transparent bg-white shadow-md hover:border-king-500 hover:shadow-xl dark:bg-gray-900">
      <div className={`post-bg h-48 rounded-t-xl bg-cover bg-center bg-no-repeat`}>{/* https://hypercolor.dev/ */}</div>
      <style jsx>
        {`
          .post-bg {
            background-image: url(${post.cover_image}),
              linear-gradient(to right, rgb(254, 243, 199), rgb(252, 211, 77), rgb(245, 158, 11));
          }
        `}
      </style>
      <div className="flex flex-1 flex-col gap-4 px-8 py-6">
        <div className="flex-1 space-y-6">
          <header className="text-2xl font-semibold lg:text-center">
            <Link href={`/posts/${post.slug}`}>
              <a className="block hover:text-queen-500 hover:underline">{post.title}</a>
            </Link>
          </header>
          {/* <p className="text-gray-500">{post.excerpt}</p> */}
          <div className="flex flex-wrap gap-2 text-xs">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                <a className="rounded-full border bg-gray-100 py-1 px-3 dark:bg-gray-800">{tag}</a>
              </Link>
            ))}
          </div>
        </div>
        <time className="block font-serif text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
      </div>
    </div>
  );
}
