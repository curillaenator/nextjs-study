'use client';

import React, { FC } from 'react';
import { useUnit } from 'effector-react';
import cn from 'classnames';

import { TbLayoutSidebarLeftExpand, TbLayoutSidebarRightExpand } from 'react-icons/tb';

import { $appStore, toggleAside } from '@/entities/app';

import { Button } from '../button';

import styles from './aside.module.scss';

const Aside: FC = () => {
  const { isAsideOpen } = useUnit($appStore);

  return (
    <aside
      className={cn(styles.aside, {
        [styles.aside_open]: isAsideOpen,
      })}
    >
      <header>
        <Button onClick={() => toggleAside()}>
          {isAsideOpen ? <TbLayoutSidebarRightExpand /> : <TbLayoutSidebarLeftExpand />}
        </Button>
      </header>
    </aside>
  );
};

export { Aside };
