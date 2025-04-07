'use client';

import React, { FC } from 'react';

import type { PostContent } from '@/entities/post';
import { MasonryGrid } from '@/kit/masonry';

import { PostCard } from './PostCard';

const MasonryPosts: FC<{ posts: PostContent[] }> = ({ posts }) => (
  <MasonryGrid items={[...posts.map((post) => () => <PostCard {...post} />)]} gap={24} />
);

export { MasonryPosts };
