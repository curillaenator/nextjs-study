import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

import { TbLabel, TbFileDescription } from 'react-icons/tb';
import { MdOutlineArrowBack, MdOutlineCreate } from 'react-icons/md';

import { createPostAction } from '@/entities/post';

import { Input } from '@/kit/input';
import { Textarea } from '@/kit/textarea';
import { Button } from '@/kit/button';

import styles from './form.module.scss';

const metadata: Metadata = { title: 'Create new post' };

async function PostForm() {
  return (
    <form className={styles.form} action={createPostAction}>
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

        <Button component={Link} href='/posts'>
          <MdOutlineArrowBack /> Back
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
export { metadata };
