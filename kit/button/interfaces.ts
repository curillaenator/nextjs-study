import type { PropsWithChildren, HTMLAttributes } from 'react';
import Link from 'next/link';

import type { ComponentAppearance, ComponentSize } from '@/theme';

interface ButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  size?: ComponentSize;
  appearance?: ComponentAppearance;

  active?: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
  centered?: boolean;

  component?: typeof Link;
  href?: string;
  type?: 'submit' | 'button';
}

export type { ButtonProps };
