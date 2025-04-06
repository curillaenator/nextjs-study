'use client';

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import cn from 'classnames';

import type { TextareaProps } from './interfaces';
import styles from './textarea.module.scss';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { leftElement, rightElement, disabled, ...rest } = props;

  const internalRef = useRef<HTMLTextAreaElement | null>(null);

  useImperativeHandle(ref, () => internalRef.current!, []);

  return (
    <div
      className={cn(styles.inputWrapper, {
        [styles.inputWrapper_db]: !!disabled,
      })}
      onClick={() => {
        internalRef.current?.focus();
      }}
    >
      {leftElement}

      <textarea {...rest} ref={internalRef} disabled={disabled} />

      {rightElement}
    </div>
  );
});

export { Textarea };
