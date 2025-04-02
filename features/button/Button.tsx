import React, { FC, PropsWithChildren, HTMLAttributes, ElementType } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './button.module.scss';

interface ButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  size?: 'small' | 'medium' | 'large';
  component?: typeof Link;
  href?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, size = 'medium', component, href, ...rest } = props;

  const Component = component ? component : ('button' as ElementType);
  const linkProps = component ? { href } : {};

  return (
    <Component {...rest} {...linkProps} className={cn(styles.button, styles[`button_${size}`])}>
      {children}
    </Component>
  );
};
