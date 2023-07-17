import type { FC } from 'react';
import type { DatePickerProps } from './DatePicker.types.ts';

import ReactDatePicker from 'react-datepicker';

import { ICON_BUTTON_ELEMENT } from '../IconButton';

import { IconChevronLeft, IconChevronRight } from '../Icons';
import { IconButton } from '../IconButton';

import './date-picker.css';

export const DatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <ReactDatePicker
      open
      selected={value}
      onChange={(...args) => onChange?.(...args)}
      previousMonthButtonLabel={
        <IconButton
          Icon={IconChevronLeft}
          /**
           * Set a non-button element in order to prevent the DOM nesting validation errors
           * caused by passing button as a child of a button
           */
          element={ICON_BUTTON_ELEMENT.SPAN}
        />
      }
      nextMonthButtonLabel={
        <IconButton
          Icon={IconChevronRight}
          /**
           * Set a non-button element in order to prevent the DOM nesting validation errors
           * caused by passing button as a child of a button
           */
          element={ICON_BUTTON_ELEMENT.SPAN}
        />
      }
    />
  );
};
