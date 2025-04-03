'use client';
import React, { FC, InputHTMLAttributes, useEffect, useRef } from 'react';

import styles from './input.module.scss';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { type } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (type !== 'password') return;
    inputRef.current?.setAttribute('autocomplete', 'new-password');
  }, [type]);

  return <input {...props} ref={inputRef} className={styles.input} />;
};

export { Input };
