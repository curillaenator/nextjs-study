import type { Metadata } from 'next';

import { getPostList } from '@/entities/post';
import { MasonryPosts } from '@/features/post';

const revalidate = 30;

const metadata: Metadata = {
  title: 'Blog',
  description: 'Description',
};

async function Blog() {
  const posts = await getPostList();

  return <MasonryPosts posts={posts} />;
}

export default Blog;
export { revalidate, metadata };
