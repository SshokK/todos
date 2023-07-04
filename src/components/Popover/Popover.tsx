import type * as types from './Popover.types';

import * as react from 'react';
import * as reactPopover from '@radix-ui/react-popover';
import * as icons from '../Icons';
import * as styles from './Popover.styles';

import classnames from 'classnames';

export const Popover = react.forwardRef<HTMLButtonElement, types.PopoverProps>(
  (
    {
      content,
      children,
      isOpen,
      onOpenChange,
      isDisabled,
      isBlank,
      isWithCloseButton,
      isWithArrow,
      side,
      alignment,
    },
    ref,
  ) => {
    return (
      <reactPopover.Root
        open={isDisabled ? false : isOpen}
        onOpenChange={onOpenChange}
      >
        <reactPopover.Trigger ref={ref} asChild>
          {children}
        </reactPopover.Trigger>
        <reactPopover.Portal>
          <reactPopover.Content
            sideOffset={5}
            side={side}
            align={alignment}
            className={classnames({
              [styles.CLASSNAMES.content]: true,
              [styles.CLASSNAMES.contentWithStyles]: !isBlank,
              [styles.CLASSNAMES.contentWithExtraPadding]:
                !isBlank && isWithCloseButton,
            })}
          >
            {isWithCloseButton && (
              <reactPopover.Close className={styles.CLASSNAMES.closeButton}>
                <icons.IconClose />
              </reactPopover.Close>
            )}
            {content}
            {isWithArrow && (
              <reactPopover.Arrow className={styles.CLASSNAMES.arrow} />
            )}
          </reactPopover.Content>
        </reactPopover.Portal>
      </reactPopover.Root>
    );
  },
);

Popover.defaultProps = {
  isWithArrow: true,
};
