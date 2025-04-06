import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { Button } from '@/kit/button';

import { getPostData, deletePost as dbDeletePost } from '@/entities/post';
import styles from '../page.module.scss';

interface ItemPageProps {
  params: Promise<{ id: string }>;
}

async function removePost(id: string) {
  'use server';
  await dbDeletePost(id);

  revalidatePath('/blog');
  redirect('/blog');
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
      <form action={removePost.bind(null, id)}>
        <Button type='submit'>Delete post</Button>
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
