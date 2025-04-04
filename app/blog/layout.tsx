'use client';

import type { ReactNode } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { keys } from 'lodash';

import { Button } from '@/kit/button';

import styles from './page.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const isBlogroot = !!keys(useParams()).length;

  return (
    <div className={styles.blog}>
      {isBlogroot && (
        <header className={styles.header}>
          <Button onClick={() => router.back()}>Back</Button>
        </header>
      )}

      {children}
    </div>
  );
}
