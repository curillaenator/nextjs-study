import React from 'react';
import Link from 'next/link';

import { TbLabel, TbFileDescription } from 'react-icons/tb';
import { MdOutlineArrowBack, MdOutlineCreate } from 'react-icons/md';

import { getPostData, editPostAction } from '@/entities/post';

import { Input } from '@/kit/input';
import { Textarea } from '@/kit/textarea';
import { Button } from '@/kit/button';

import styles from './form.module.scss';

interface EditPageParams {
  params: Promise<{ id: string }>;
}

async function EditPostForm({ params }: EditPageParams) {
  const { id } = await params;
  const { title, content } = await getPostData(id);

  return (
    <form className={styles.form} action={editPostAction}>
      <input type='hidden' name='id' value={id} />

      <Input
        name='title'
        required
        autoComplete='off'
        leftElement={<TbLabel />}
        placeholder='Название поста'
        defaultValue={title}
      />

      <Textarea
        name='content'
        required
        autoComplete='off'
        leftElement={<TbFileDescription />}
        rows={8}
        placeholder='Тело поста'
        defaultValue={content}
      />

      <div className={styles.buttons}>
        <Button appearance='primary' type='submit'>
          <MdOutlineCreate /> Edit post
        </Button>

        <Button component={Link} href={`/blog/${id}`}>
          <MdOutlineArrowBack /> Back
        </Button>
      </div>
    </form>
  );
}

const generateMetadata = async ({ params }: EditPageParams) => {
  const { id } = await params;
  const { title } = await getPostData(id);
  return { title: `Edit: ${title}` };
};

export default EditPostForm;
export { generateMetadata };
