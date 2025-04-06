import type { ReactNode } from 'react';
import type { PostContent } from '@/entities/post';

type FiledName = keyof PostContent;

interface NewPostField {
  name: FiledName;
  icon: ReactNode;
  placeholder: string;
}

export type { FiledName, NewPostField };
