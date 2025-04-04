import type { Metadata } from 'next';

import { getPostList } from '@/entities/post';
import { MasonryPosts } from '@/features/post';

import styles from './page.module.scss';

const metadata: Metadata = {
  title: 'Blog',
  description: 'Description',
};

async function Blog() {
  const posts = await getPostList();

  return (
    <div className={styles.page}>
      <MasonryPosts posts={posts} />
    </div>
  );
}

export default Blog;
export { metadata };
