'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { keys } from 'lodash';

import {
  // useRouter,
  useParams,
  usePathname,
} from 'next/navigation';

import { MdOutlineArrowBack, MdOutlineCreate } from 'react-icons/md';

import { Button } from '@/kit/button';

import styles from './page.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  // const router = useRouter();
  const pathName = usePathname();

  const isPost = !!keys(useParams()).length;
  const isPostCreate = pathName === '/blog/new';

  const buttonProps = isPost
    ? {
        component: Link,
        href: '/blog',
        children: (
          <>
            <MdOutlineArrowBack /> Posts dashboard
          </>
        ),
      }
    : {
        component: Link,
        href: '/blog/new',
        children: (
          <>
            <MdOutlineCreate /> Create new post
          </>
        ),
      };

  return (
    <div className={styles.page}>
      <header className={styles.header}>{isPostCreate ? <h1>New post</h1> : <Button {...buttonProps} />}</header>

      {children}
    </div>
  );
}
