'use client';

import React, { FC } from 'react';
// import { useForm, Controller } from 'react-hook-form';

import { TbLabel, TbFileDescription } from 'react-icons/tb';

import { Input } from '@/kit/input';
import { Textarea } from '@/kit/textarea';
import { Button } from '@/kit/button';

import { NewPostField } from './interfaces';
import styles from './newpost.module.scss';

const FIELDS: (NewPostField & { component: FC<NewPostField> })[] = [
  {
    name: 'title',
    icon: <TbLabel />,
    placeholder: 'Название поста',
    component: ({ icon, ...field }: NewPostField) => (
      <Input key={field.name} required autoComplete='off' leftElement={icon} {...field} />
    ),
  },
  {
    name: 'content',
    icon: <TbFileDescription />,
    placeholder: 'Тело поста',
    component: ({ icon, ...field }: NewPostField) => (
      <Textarea key={field.name} required autoComplete='off' leftElement={icon} rows={8} {...field} />
    ),
  },
];

const NewPostForm: FC = () => {
  // const {
  //   control,
  //   // reset,
  //   // register,
  //   handleSubmit,
  //   // formState: { errors, dirtyFields },
  // } = useForm<PostContent>();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('formData', formData.get('title'), formData.get('content'));
      }}
    >
      {FIELDS.map(({ component: Component, ...field }) => (
        <Component key={field.name} {...field} />
      ))}

      <div className={styles.buttons}>
        <Button fullwidth centered appearance='primary' type='submit'>
          Create new post
        </Button>

        <Button fullwidth centered>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export { NewPostForm };
