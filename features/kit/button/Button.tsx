import React, { FC, ElementType } from 'react';
import cn from 'classnames';

import { ButtonProps } from './interfaces';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const { children, size = 'medium', appearance = 'secondary', component, href, fullwidth, active, ...rest } = props;

  const Component = component ? component : ('button' as ElementType);
  const linkProps = component ? { href } : {};

  return (
    <Component
      {...rest}
      {...linkProps}
      className={cn(styles.button, styles[`button_${size}`], styles[`button_${appearance}`], {
        [styles.button_fullwidth]: !!fullwidth,
        [styles.button_active]: !!active,
      })}
    >
      {children}
    </Component>
  );
};

export { Button };
