'use client';

import React, { FC } from 'react';
import Link from 'next/link';

import { Button } from '../button';

import styles from './header.module.scss';

const NAV = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
];

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        {NAV.map(({ title, href }) => (
          <Button key={href} component={Link} href={href}>
            {title}
          </Button>
        ))}
      </nav>
    </header>
  );
};

export { Header };
