'use client';

import React, { FC, SetStateAction } from 'react';
import cn from 'classnames';

import { TbLayoutSidebarLeftExpand, TbLayoutSidebarRightExpand } from 'react-icons/tb';

import { Button } from '../button';

import styles from './aside.module.scss';

interface AsideProps {
  isAside: boolean;
  setIsAside: (value: SetStateAction<boolean>) => void;
}

const Aside: FC<AsideProps> = (props) => {
  const { isAside, setIsAside } = props;

  return (
    <aside
      className={cn(styles.aside, {
        [styles.aside_open]: isAside,
      })}
    >
      <header>
        <Button onClick={() => setIsAside((prev) => !prev)}>
          {isAside ? <TbLayoutSidebarRightExpand /> : <TbLayoutSidebarLeftExpand />}
        </Button>
      </header>
    </aside>
  );
};

export { Aside };
