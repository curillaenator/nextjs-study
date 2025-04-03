'use client';

import React, { FC } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { toggleMode } from '@/entities/app';

import { Avatar } from '@/kit/avatar';
import { Button } from '@/kit/button';

import styles from './header.module.scss';

const Buttons: FC = () => {
  const session = useSession();

  return (
    <div className={styles.buttons}>
      <Button onClick={() => toggleMode()}>Mode</Button>

      {!!session?.data && (
        <Avatar
          component={Link}
          href='/profile'
          username={session.data.user?.name || null}
          src={session.data.user?.image}
        />
      )}
    </div>
  );
};

export { Buttons };
