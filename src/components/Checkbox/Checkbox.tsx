import type { CheckboxProps } from './Checkbox.types';

import * as react from 'react';
import * as reactCheckbox from '@radix-ui/react-checkbox';
import * as icons from '../Icons';
import * as styles from './Checkbox.styles';
import * as constants from './Checkbox.constants';

import classnames from 'classnames';

export const Checkbox = react.forwardRef<HTMLFormElement, CheckboxProps>(
  ({ type, size, label, isChecked, isDisabled, onChange, classNames }, ref) => {
    const id = react.useId();

    return (
      <form
        ref={ref}
        className={classnames(
          classNames?.container,
          styles.CLASSNAMES.container,
        )}
      >
        <div className={styles.CLASSNAMES.innerContainer}>
          <reactCheckbox.Root
            id={id}
            checked={isChecked}
            disabled={isDisabled}
            onCheckedChange={onChange}
            className={classnames(classNames?.box, {
              [styles.CLASSNAMES.checkbox]: true,
              [styles.CLASSNAMES.checkboxSize[
                size ?? constants.CHECKBOX_SIZE.MD
              ]]: true,
              [styles.CLASSNAMES.checkboxType[
                type ?? constants.CHECKBOX_TYPE.PRIMARY
              ]]: true,
            })}
          >
            <reactCheckbox.Indicator
              forceMount
              className={classnames(classNames?.indicator, {
                [styles.CLASSNAMES.checkboxIndicatorType[
                  type ?? constants.CHECKBOX_TYPE.PRIMARY
                ]]: true,

                [styles.CLASSNAMES.checkboxIndicatorSize[
                  size ?? constants.CHECKBOX_SIZE.MD
                ]]: true,
              })}
            >
              <icons.IconCheck />
            </reactCheckbox.Indicator>
          </reactCheckbox.Root>
          {label && (
            <label
              className={styles.CLASSNAMES.label}
              data-disabled={isDisabled}
              htmlFor={id}
            >
              {label}
            </label>
          )}
        </div>
      </form>
    );
  },
);
