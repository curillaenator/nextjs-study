import React, { FC } from 'react';
import cn from 'classnames';

import type { AvatarProps } from './interfaces';
import styles from './avatar.module.scss';

const getInits = (fullName: string | null) => {
  if (!fullName) return 'N/A';

  return fullName
    .split(' ')
    .slice(0, 2)
    .map((char) => char.toUpperCase())
    .join('');
};

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, username, size = 'medium', component, href } = props;

  const Wrapper = (!!component ? component : 'div') as React.ElementType;
  const wrapperProps = !!component ? { href } : {};

  return (
    <Wrapper {...wrapperProps} className={cn(styles.wrapper, styles[`wrapper_${size}`])}>
      {src ? (
        <img src={src} alt={alt} className={styles.avatarImage} />
      ) : (
        <div className={styles.avatarInits}>{getInits(username)}</div>
      )}
    </Wrapper>
  );
};

export { Avatar };
