import React, { FC } from 'react';

import Link from 'next/link';

// import type {HeaderProps} from './interfaces'
import styles from './header.module.scss';

interface HeaderProps {
  toggleAside: (open?: boolean) => void;
}

const Header: FC<HeaderProps> = (props) => {
  const { toggleAside } = props;

  return (
    <header className={styles.header}>
      <button
      //  onClick={() => toggleAside()}
      >
        Aside
      </button>

      <nav className={styles.navigation}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
      </nav>
    </header>
  );
};

export { Header };
