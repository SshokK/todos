import type { TextFieldProps } from './TextField.types.ts';

import * as react from 'react';
import * as styles from './TextField.styles.ts';
import * as constants from './TextField.constants.ts';

import classnames from 'classnames';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../IconButton';

import { IconButton } from '../IconButton';
import { IconSearch } from '../Icons';

export const TextField = react.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      value,
      type,
      classNames,
      placeholder,
      shouldRenderSearchButton,
      isDisabled,
      onChange,
      onFocus,
      onBlur,
      onClick,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classnames(
          styles.CLASSNAMES.container,
          classNames?.container,
        )}
      >
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.value, e)}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          className={classnames(classNames?.input, {
            [styles.CLASSNAMES.input[type ?? constants.TEXTFIELD_TYPE.PRIMARY]]:
              true,
          })}
        />
        {shouldRenderSearchButton && (
          <IconButton
            type={ICON_BUTTON_TYPE.SECONDARY}
            Icon={IconSearch}
            size={ICON_BUTTON_SIZE.LG}
          />
        )}
      </div>
    );
  },
);

TextField.defaultProps = {
  placeholder: 'Type...',
};
