'use client';

import React, { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Input } from '@/kit/input';

import type { PostContent } from '@/entities/post';

import styles from './newpost.module.scss';

const NewPostForm: FC = () => {
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<PostContent>();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((formData) => {
        console.log('formData', formData);
      })}
    >
      <Controller
        name='title'
        control={control}
        rules={{
          required: 'Требуется название поста',
          minLength: { value: 3, message: 'Space name must be at least 3 characters' },
          maxLength: { value: 64, message: 'Please do not go above 64 chars' },
        }}
        render={({ field }) => <Input {...field} aria-required type='text' placeholder='Название поста' />}
      />
    </form>
  );
};

export { NewPostForm };
