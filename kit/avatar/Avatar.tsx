import React, { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { ComponentSize } from '@/theme/interfaces';

import type { AvatarProps } from './interfaces';
import styles from './avatar.module.scss';

const SIZES_ASSOC: Record<ComponentSize, number> = {
  small: 32,
  medium: 40,
  large: 48,
};

const getInits = (fullName: string | null) => {
  if (!fullName) return 'N/A';

  return fullName
    .split(' ')
    .slice(0, 2)
    .map((char) => char.slice(0, 1).toUpperCase())
    .join('');
};

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, username, size = 'medium', component, href } = props;

  const Wrapper = (!!component ? component : 'div') as React.ElementType;
  const wrapperProps = !!component ? { href } : {};

  return (
    <Wrapper {...wrapperProps} className={cn(styles.wrapper, styles[`wrapper_${size}`])}>
      {src ? (
        <Image
          src={src}
          alt={alt || ''}
          width={SIZES_ASSOC[size]}
          height={SIZES_ASSOC[size]}
          className={styles.avatarImage}
        />
      ) : (
        <div className={styles.avatarInits}>{getInits(username)}</div>
      )}
    </Wrapper>
  );
};

export { Avatar };
