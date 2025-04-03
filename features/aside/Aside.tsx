'use client';

import React, { FC } from 'react';
import { useUnit } from 'effector-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import cn from 'classnames';

import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
  TbHome,
  TbInfoHexagon,
  TbDog,
  TbLogin,
  TbLogout,
} from 'react-icons/tb';

import { $appStore, toggleAside } from '@/entities/app';
import { Button } from '@/features/kit/button';

import styles from './aside.module.scss';

const NAV = [
  { title: 'Home', href: '/', Icon: TbHome },
  { title: 'About', href: '/about', Icon: TbInfoHexagon },
  { title: 'Blog', href: '/blog', Icon: TbDog },
];

const isActive = (route: string, pathname: string) => {
  if (route === '/' && pathname !== '/') return false;
  return RegExp(`^${route}.*`).test(pathname);
};

const Aside: FC = () => {
  const { isAsideOpen } = useUnit($appStore);

  const pathname = usePathname();
  const session = useSession();

  console.log('Aside', session);

  return (
    <aside
      className={cn(styles.aside, {
        [styles.aside_open]: isAsideOpen,
      })}
    >
      <header>
        <div className={styles.logo}>
          <h1>NextJS</h1>
        </div>

        <Button onClick={() => toggleAside()}>
          {isAsideOpen ? <TbLayoutSidebarRightExpand /> : <TbLayoutSidebarLeftExpand />}
        </Button>
      </header>

      <nav>
        {NAV.map(({ title, href, Icon }) => (
          <Button
            key={href}
            component={Link}
            href={href}
            fullwidth
            active={isActive(href, pathname)}
            children={
              <>
                <Icon /> {title}
              </>
            }
          />
        ))}
      </nav>

      <footer>
        <Button
          component={Link}
          href={session?.data ? '#' : '/api/auth/signin'}
          fullwidth
          children={
            session?.data ? (
              <>
                <TbLogout /> {'Sign out'}
              </>
            ) : (
              <>
                <TbLogin /> {'Sign in'}
              </>
            )
          }
          onClick={() => {
            if (session?.data) signOut({ callbackUrl: '/' });
          }}
        />
      </footer>
    </aside>
  );
};

export { Aside };
