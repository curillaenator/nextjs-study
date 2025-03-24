import { FC } from 'react';

interface BlogItemProps {
  params: { id: string };
}

const generateMetadata = async ({ params }: BlogItemProps) => {
  const { id } = await params;
  return { title: `Blog ${id}` };
};

const BlogItemPage: FC<BlogItemProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Blog {id}</h1>
    </div>
  );
};

export { generateMetadata };

export default BlogItemPage;
