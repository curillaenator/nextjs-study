'use client';

import React, { FC } from 'react';

import { MasonryGrid } from '@/kit/masonry';
import { Post } from '@/features/post';
import type { PostContent } from '@/entities/post';

const MasonryPosts: FC<{ posts: PostContent[] }> = ({ posts }) => (
  <MasonryGrid items={posts.map((post) => () => <Post {...post} />)} gap={24} />
);

export { MasonryPosts };
