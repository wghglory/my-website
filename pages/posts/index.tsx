import PostList from '@/components/blog/PostList';
import {getAllPosts} from '@/lib/post';
import {PostMeta} from '@/models/post';

export default function PostsPage({posts}: {posts: PostMeta[]}) {
  return (
    <section className="bg-gray-100 dark:bg-gray-900" id="project">
      <div className="container m-auto py-10 px-6 lg:py-20">
        <h2 className="py-6 text-center text-2xl lg:mb-10 lg:text-left lg:text-5xl">Posts</h2>
        <PostList posts={posts} />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    // .slice(0, 9)
    .map((post) => post.meta);

  return {props: {posts}};
}
