'use client';

import React, { FC, useEffect, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { TbLogin } from 'react-icons/tb';

import { Button } from '@/kit/button';
import { Input } from '@/kit/input';

import styles from './creds.module.scss';

export const CredsAuth: FC = () => {
  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false, // disable redirect to default nextjs signin form
    });

    if (!!res && !res.error) {
      router.push('/profile');
    } else {
      alert('Ops');
    }
  };

  useEffect(() => {
    emailInputRef.current?.setAttribute('autocomplete', 'off');
    passwordInputRef.current?.setAttribute('autocomplete', 'new-password');
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input type='email' name='email' required placeholder='email' autoComplete='off' />

      <Input type='password' name='password' required placeholder='password' />

      <Button type='submit' appearance='primary'>
        <TbLogin /> Sign in with creds
      </Button>
    </form>
  );
};
