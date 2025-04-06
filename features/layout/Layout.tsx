'use client';

import { PropsWithChildren, FC, useEffect } from 'react';
import { useUnit } from 'effector-react';

import { Geist, Geist_Mono } from 'next/font/google';
import cn from 'classnames';

import { $appStore, toggleMode } from '@/entities/app';

import { Providers } from '../providers';
import { Header } from '../header';
import { Aside } from '../aside';

import styles from './layout.module.scss';

const inter = Geist({ variable: '--font-geist', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { darkmode = true } = useUnit($appStore);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const modeHandler = () => toggleMode(media.matches);
    modeHandler(); // начальное значение

    media.addEventListener('change', modeHandler); // слушаем изменения

    return () => {
      media.removeEventListener('change', modeHandler);
    };
  }, []);

  return (
    <body
      className={cn(styles.body, inter.variable, geistMono.variable, styles[`body_${darkmode ? 'dark' : 'light'}`])}
    >
      <Providers>
        <Aside />

        <div className={styles.view}>
          <Header />

          <main className={styles.main}>{children}</main>
        </div>
      </Providers>
    </body>
  );
};

export { Layout };
