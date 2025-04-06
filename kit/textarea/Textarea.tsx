import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import cn from 'classnames';

import type { TextareaProps } from './interfaces';
import styles from './textarea.module.scss';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { leftElement, rightElement, disabled, ...inputProps } = props;

  const inputInternalRef = useRef<HTMLTextAreaElement | null>(null);

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

      <textarea {...inputProps} ref={inputInternalRef} disabled={disabled} />

      {rightElement}
    </div>
  );
});

export { Textarea };
