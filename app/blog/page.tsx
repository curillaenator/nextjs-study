import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Description',
};

function Blog() {
  return (
    <div>
      <h1>Blog</h1>

      <Link href='/blog/qwerty'>qwerty</Link>
    </div>
  );
}

export default Blog;
