import type { PostContent } from './interfaces';

const getPostList = async () => {
  const data = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 60 },
  });

  return (await data.json()) as PostContent[];
};

const getPostData = async (id: number) => {
  const data = await fetch(`https://api.vercel.app/blog/${id}`, {
    next: { revalidate: 60 },
  });

  return (await data.json()) as PostContent;
};

export { getPostList, getPostData };
