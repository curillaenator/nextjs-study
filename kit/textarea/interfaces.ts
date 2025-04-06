import type { ReactNode, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export type { TextareaProps };
