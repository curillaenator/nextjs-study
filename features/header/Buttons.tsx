'use client';

import React, { FC } from 'react';

import { toggleMode } from '@/entities/app';

import { Button } from '../kit/button';

import styles from './header.module.scss';

const Buttons: FC = () => {
  return (
    <div className={styles.buttons}>
      <Button onClick={() => toggleMode()}>Mode</Button>
    </div>
  );
};

export { Buttons };
