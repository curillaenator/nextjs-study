'use client';

import { PropsWithChildren, FC } from 'react';
import { useUnit } from 'effector-react';

import { Geist, Geist_Mono } from 'next/font/google';
import cn from 'classnames';

import { $appStore } from '@/entities/app';

import { Providers } from '../providers';
import { Header } from '../header';
import { Aside } from '../aside';

import styles from './layout.module.scss';

const inter = Geist({ variable: '--font-geist', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { darkmode } = useUnit($appStore);

  return (
    <body
      className={cn(styles.body, inter.variable, geistMono.variable, {
        [styles.body_automode]: darkmode === undefined,
        [styles[`body_${darkmode ? 'dark' : 'light'}`]]: darkmode !== undefined,
      })}
    >
      <Providers>
        <Aside />

        <div className={styles.view}>
          <Header />

          <main>{children}</main>
        </div>
      </Providers>
    </body>
  );
};

export { Layout };
