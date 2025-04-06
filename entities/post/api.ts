import { parse } from 'date-fns';
import { revalidatePath } from 'next/cache';

import { POST_DATE_FORMAT } from './constants';
import type { PostContent } from './interfaces';

const POSTS_ENDPOINT = 'http://localhost:4000/posts';

const deletePost = async (id: string) => {
  await fetch(`${POSTS_ENDPOINT}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });

  return { id: 'deleted' };
};

const createPost = async (postContent: PostContent) => {
  const response = await fetch(POSTS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(postContent),
  });

  const post = (await response.json()) as PostContent;

  revalidatePath('/blog');

  return post;
};

const toTimestamp = (date: string) => parse(date, POST_DATE_FORMAT, new Date()).getTime();
const getPostList = async () => {
  const data = await fetch(POSTS_ENDPOINT, { next: { revalidate: 60 } });
  const posts = (await data.json()) as PostContent[];
  return [...posts].sort(({ date: dateA }, { date: dateB }) => toTimestamp(dateB) - toTimestamp(dateA));
};

const getPostData = async (id: string) => {
  const data = await fetch(`${POSTS_ENDPOINT}/${id}`, {
    next: { revalidate: 60 },
  });

  return (await data.json()) as PostContent;
};

export { getPostList, getPostData, createPost, deletePost };
