import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import cn from 'classnames';

import type { InputProps } from './interfaces';
import styles from './input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { leftElement, rightElement, disabled, ...inputProps } = props;

  const inputInternalRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => inputInternalRef.current!, []);

  return (
    <div
      className={cn(styles.inputWrapper, {
        [styles.inputWrapper_db]: !!disabled,
      })}
      onClick={() => {
        inputInternalRef.current?.focus();
      }}
    >
      {leftElement}

      <input {...inputProps} ref={inputInternalRef} disabled={disabled} />

      {rightElement}
    </div>
  );
});

export { Input };
