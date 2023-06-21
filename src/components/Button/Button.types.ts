import type { ReactNode, MouseEvent } from 'react';

export type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
};
