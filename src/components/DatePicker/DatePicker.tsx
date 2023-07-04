import type { FC } from 'react';
import type { DatePickerProps } from './DatePicker.types.ts';

import ReactDatePicker from 'react-datepicker';

import { IconChevronLeft, IconChevronRight } from '../Icons';
import { IconButton } from '../IconButton';

import './date-picker.css';

export const DatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <ReactDatePicker
      open
      selected={value}
      onChange={(...args) => onChange?.(...args)}
      previousMonthButtonLabel={<IconButton Icon={IconChevronLeft} />}
      nextMonthButtonLabel={<IconButton Icon={IconChevronRight} />}
    />
  );
};
