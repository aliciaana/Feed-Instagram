import PostItem from '../components/PostItem';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <main className="max-w-md mx-auto mt-8">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </main>
  );
}

