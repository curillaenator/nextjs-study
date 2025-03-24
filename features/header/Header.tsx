'use client';
import React, { FC } from 'react';

import Link from 'next/link';

// import type {HeaderProps} from './interfaces'
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
      </nav>
    </header>
  );
};

export { Header };
