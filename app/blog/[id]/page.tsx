import { getPostData } from '@/entities/post';
import styles from '../page.module.scss';

interface ItemPageProps {
  params: { id: string };
}

async function BlogItemPage({ params }: ItemPageProps) {
  const { id } = await params;
  const { title, content } = await getPostData(parseInt(id));

  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

const generateMetadata = async ({ params }: ItemPageProps) => {
  const { id } = await params;
  const { title } = await getPostData(parseInt(id));

  return { title };
};

export default BlogItemPage;
export { generateMetadata };
