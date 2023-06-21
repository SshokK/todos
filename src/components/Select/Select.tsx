import type { SelectProps } from './Select.types';

import * as react from 'react';
import * as reactSelect from '@radix-ui/react-select';
import * as elements from './elements';
import * as styles from './Select.styles';
import * as constants from './Select.constants';
import * as hooks from './hooks';

import classnames from 'classnames';

export const Select = react.forwardRef<HTMLDivElement, SelectProps>(
  ({ value, options, onChange, placeholder, width }, ref) => {
    const handlers = hooks.useSelectHandlers({
      props: {
        options,
        onChange,
      },
    });

    return (
      <div
        ref={ref}
        className={classnames({
          [styles.CLASSNAMES.container]: true,
          [styles.CONTAINER_WIDTH_CLASSNAMES[
            width ?? constants.SELECT_WIDTH.MD
          ]]: true,
        })}
      >
        <reactSelect.Root
          value={value || undefined}
          onValueChange={handlers.handleChange}
        >
          <elements.SelectTrigger placeholder={placeholder} />
          <reactSelect.Portal>
            <reactSelect.Content className={styles.CLASSNAMES.content}>
              <elements.SelectScrollUpButton />
              <reactSelect.Viewport className={styles.CLASSNAMES.viewport}>
                {options.map((group) => {
                  return <elements.SelectGroup key={group.key} group={group} />;
                })}
              </reactSelect.Viewport>
              <elements.SelectScrollDownButton />
            </reactSelect.Content>
          </reactSelect.Portal>
        </reactSelect.Root>
      </div>
    );
  },
);

Select.defaultProps = {
  width: constants.SELECT_WIDTH.MD,
  placeholder: 'Choose...',
};
