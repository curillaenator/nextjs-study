import type { Metadata } from 'next';
import Link from 'next/link';

import type { JSONPlaceholderPost } from './interfaces';

import styles from './blog.module.scss';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Description',
};

const getData = async () => {
  const data = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 60 },
  });

  return (await data.json()) as JSONPlaceholderPost[];
};

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Blog</h1>

      <ul className={styles.list}>
        {posts.map(({ id, title, content }: JSONPlaceholderPost) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
