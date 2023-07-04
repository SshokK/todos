import type { SyntheticEvent } from 'react';

export type DatePickerProps = {
  value?: Date;
  onChange?: (date: Date | null, e?: SyntheticEvent<unknown>) => void;
};
