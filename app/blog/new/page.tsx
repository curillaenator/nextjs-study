import type { Metadata } from 'next';

import { NewPostForm } from '@/features/post';

const metadata: Metadata = {
  title: 'Create new post',
};

async function PostForm() {
  return <NewPostForm />;
}

export default PostForm;
export { metadata };
