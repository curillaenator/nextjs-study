'use server';

import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { redirect } from 'next/navigation';
import { v4 as getId } from 'uuid';
import { format } from 'date-fns';

import { TbLabel, TbFileDescription } from 'react-icons/tb';
import { MdOutlineArrowBack, MdOutlineCreate } from 'react-icons/md';

import { type PostContent, createPost as dbCreatePost, POST_DATE_FORMAT } from '@/entities/post';
import { authCfg } from '@/configs/auth';

import { Input } from '@/kit/input';
import { Textarea } from '@/kit/textarea';
import { Button } from '@/kit/button';

import styles from './newpost.module.scss';

async function createPost(formData: FormData) {
  'use server';

  const session = await getServerSession(authCfg);
  const { user } = session || {};

  const newPost: PostContent = {
    id: getId(),
    title: formData.get('title')?.toString() || '',
    content: formData.get('content')?.toString() || '',
    category: 'blah blah blah',
    author: user?.name || '',
    date: format(new Date(Date.now()), POST_DATE_FORMAT),
  };

  const post = await dbCreatePost(newPost);

  redirect(`/blog/${post.id}`);
}

export default async function NewPostForm() {
  return (
    <form className={styles.form} action={createPost}>
      <Input name='title' required autoComplete='off' leftElement={<TbLabel />} placeholder='Название поста' />

      <Textarea
        name='content'
        required
        autoComplete='off'
        leftElement={<TbFileDescription />}
        rows={8}
        placeholder='Тело поста'
      />

      <div className={styles.buttons}>
        <Button appearance='primary' type='submit'>
          <MdOutlineCreate /> Create new post
        </Button>

        <Button component={Link} href='/blog'>
          <MdOutlineArrowBack /> Back
        </Button>
      </div>
    </form>
  );
}

export { NewPostForm };
