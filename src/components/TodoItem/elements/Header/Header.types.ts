import type { ComponentProps } from 'react';
import type { TextField } from '../../../TextField';

export type HeaderProps = {
  title: string;
  isDone: boolean;
  onTitleChange?: ComponentProps<typeof TextField>['onChange'];
};
