import type { PostContent } from './interfaces';

const POSTS_ENDPOINT = 'http://localhost:4000/posts';

const getPostList = async () => {
  const data = await fetch(POSTS_ENDPOINT, {
    next: { revalidate: 60 },
  });

  return (await data.json()) as PostContent[];
};

const getPostData = async (id: number) => {
  const data = await fetch(`${POSTS_ENDPOINT}/${id}`, {
    next: { revalidate: 60 },
  });

  return (await data.json()) as PostContent;
};

export { getPostList, getPostData };
