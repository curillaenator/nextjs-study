'use client';

import React, { FC } from 'react';
import { MasonryGrid } from '@k-art/masonry-grid';

import type { PostContent } from '@/entities/post';

import { PostCard } from './PostCard';

const MasonryPosts: FC<{ posts: PostContent[] }> = ({ posts }) => (
  <MasonryGrid items={[...posts.map((post) => () => <PostCard {...post} />)]} gap={24} />
);

export { MasonryPosts };
