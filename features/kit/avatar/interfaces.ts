import type { ComponentSize } from '@/theme';

interface AvatarProps {
  src?: string | null;
  alt?: string;
  username: string | null;
  size?: ComponentSize;
  onClick?: () => void;
}

export type { AvatarProps };
