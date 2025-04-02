'use client';

import { useState, PropsWithChildren, FC } from 'react';
import { Inter, Geist_Mono } from 'next/font/google';
import cn from 'classnames';

import { Header } from '../header';
import { Aside } from '../aside';

import styles from './layout.module.scss';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isAside, setIsAside] = useState<boolean>(false);

  // const [mode, setDm] = useState<'dark' | 'light'>('dark');

  return (
    <body className={cn(styles.body, inter.variable, geistMono.variable)}>
      <Aside isAside={isAside} setIsAside={setIsAside} />

      <div className={styles.view}>
        <Header />

        <main>{children}</main>
      </div>
    </body>
  );
};

export { Layout };
