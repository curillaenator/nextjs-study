import { parse } from 'date-fns';

import { POST_DATE_FORMAT } from './constants';
import type { PostContent } from './interfaces';

const POSTS_ENDPOINT = 'http://localhost:4000/posts';

const createPost = async (postContent: PostContent) => {
  const response = await fetch(POSTS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(postContent),
  });

  return (await response.json()) as PostContent;
};

const toTimestamp = (date: string) => parse(date, POST_DATE_FORMAT, new Date()).getTime();
const getPostList = async () => {
  const data = await fetch(POSTS_ENDPOINT, { next: { revalidate: 10 } });
  const posts = (await data.json()) as PostContent[];
  return [...posts].sort(({ date: dateA }, { date: dateB }) => toTimestamp(dateB) - toTimestamp(dateA));
};

const getPostData = async (id: string) => {
  const data = await fetch(`${POSTS_ENDPOINT}/${id}`, {
    next: { revalidate: 60 },
  });

  return (await data.json()) as PostContent;
};

export { getPostList, getPostData, createPost };
