'use client';

import type { ReactNode } from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { keys } from 'lodash';

import { Button } from '@/kit/button';

import styles from './page.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();

  const isPost = !!keys(useParams()).length;
  const isPostCreate = pathName === '/blog/new';

  const buttonProps = isPost
    ? { onCLick: () => router.back(), children: 'Back' }
    : { component: Link, href: '/blog/new', children: 'Create new post' };

  return (
    <div className={styles.page}>
      <header className={styles.header}>{isPostCreate ? <h1>New post</h1> : <Button {...buttonProps} />}</header>

      {children}
    </div>
  );
}
