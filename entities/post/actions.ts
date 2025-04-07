'use server';

import { getServerSession } from 'next-auth';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { v4 as getId } from 'uuid';
import { format } from 'date-fns';

import { authCfg } from '@/configs/auth';

import { createPost, deletePost, editPost } from './api';
import { POST_DATE_FORMAT } from './constants';

async function createPostAction(formData: FormData) {
  'use server';

  const session = await getServerSession(authCfg);
  const { user } = session || {};

  const post = await createPost({
    id: getId(),
    title: formData.get('title')?.toString() || '',
    content: formData.get('content')?.toString() || '',
    category: 'blah blah blah',
    author: user?.name || '',
    date: format(new Date(Date.now()), POST_DATE_FORMAT),
  });

  revalidatePath('/blog');
  redirect(`/blog/${post.id}`);
}

async function editPostAction(formData: FormData) {
  'use server';

  const { id } = await editPost({
    id: formData.get('id')?.toString() || getId(),
    title: formData.get('title')?.toString() || '',
    content: formData.get('content')?.toString() || '',
    date: format(new Date(Date.now()), POST_DATE_FORMAT),
  });

  revalidatePath('/blog');
  revalidatePath(`/blog/${id}`);
  redirect(`/blog/${id}`);
}

async function removePostAction(id: string) {
  'use server';
  await deletePost(id);

  revalidatePath('/blog');
  redirect('/blog');
}

export { createPostAction, editPostAction, removePostAction };
