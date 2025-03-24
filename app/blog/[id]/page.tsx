import { FC } from 'react';

interface BlogItemProps {
  params: { id: string };
}

const BlogItemPage: FC<BlogItemProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Blog {id}</h1>
    </div>
  );
};

export default BlogItemPage;
