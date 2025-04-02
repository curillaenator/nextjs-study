'use client';

import type { ReactNode } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { keys } from 'lodash';

import { Button } from '@/features/button';

import styles from './blog.module.scss';

export default ({ children }: { children: ReactNode }) => {
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
};
