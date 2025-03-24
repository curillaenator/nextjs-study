'use client';
import { useState, PropsWithChildren, FC } from 'react';
import { Inter, Geist_Mono } from 'next/font/google';
import cn from 'classnames';

import { Header } from '../header';

import styles from './layout.module.scss';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isAside, setIsAside] = useState<boolean>(false);

  // const [mode, setDm] = useState<'dark' | 'light'>('dark');

  return (
    <body className={cn(styles.body, inter.variable, geistMono.variable)}>
      <aside
        className={cn(styles.aside, {
          [styles.aside_open]: isAside,
        })}
      >
        <button onClick={() => setIsAside((prev) => !prev)}>Aside</button>
      </aside>

      <main className={styles.view}>
        <Header />
        <div>{children}</div>
      </main>
    </body>
  );
};

export { Layout };
