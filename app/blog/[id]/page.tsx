import Link from 'next/link';
import { Button } from '@/kit/button';

import { getPostData, removePostAction } from '@/entities/post';
import styles from '../page.module.scss';

interface ItemPageProps {
  params: Promise<{ id: string }>;
}

async function BlogItemPage({ params }: ItemPageProps) {
  const { id } = await params;
  const { title, content } = await getPostData(id);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <br />
      <p>{content}</p>

      <br />

      <form action={removePostAction.bind(null, id)} style={{ display: 'flex', gap: '16px' }}>
        <Button type='submit'>Delete post</Button>

        <Button type='button' component={Link} href={`/blog/${id}/edit`}>
          Edit post
        </Button>
      </form>
    </div>
  );
}

const generateMetadata = async ({ params }: ItemPageProps) => {
  const { id } = await params;
  const { title } = await getPostData(id);

  return { title };
};

export default BlogItemPage;
export { generateMetadata };
