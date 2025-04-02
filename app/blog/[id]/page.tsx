import type { JSONPlaceholderPost } from '../interfaces';
import styles from '../blog.module.scss';

interface BlogItemProps {
  params: { id: string };
}

const getData = async (id: number) => {
  const data = await fetch(`https://api.vercel.app/blog/${id}`, {
    next: { revalidate: 60 },
  });

  return (await data.json()) as JSONPlaceholderPost;
};

export default async function BlogItemPage({ params }: BlogItemProps) {
  const { id } = await params;
  const { title, content } = await getData(parseInt(id));

  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export const generateMetadata = async ({ params }: BlogItemProps) => {
  const { id } = await params;
  const { title } = await getData(parseInt(id));

  return { title };
};
