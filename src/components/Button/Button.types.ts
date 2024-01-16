import type { ReactNode, MouseEvent } from 'react';
import type * as constants from './Button.constants.ts';

export type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  textAlignment?: constants.BUTTON_TEXT_ALIGNMENT;
  children?: ReactNode;
};
