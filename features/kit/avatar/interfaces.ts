import Link from 'next/link';
import type { ComponentSize } from '@/theme';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  username: string | null;
  size?: ComponentSize;
  component?: typeof Link;
  href?: string;
}

export type { AvatarProps };
