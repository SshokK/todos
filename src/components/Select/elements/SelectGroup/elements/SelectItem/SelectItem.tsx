import type * as types from './SelectItem.types';

import * as react from 'react';
import * as reactSelect from '@radix-ui/react-select';
import * as icons from '../../../../../Icons';
import * as styles from './SelectItem.styles';

import classnames from 'classnames';

export const SelectItem = react.forwardRef<
  HTMLDivElement,
  types.SelectItemProps
>((props, ref) => {
  return (
    <reactSelect.Item
      ref={ref}
      value={props.value}
      disabled={props.isDisabled}
      className={classnames({
        [styles.CLASSNAMES.container]: true,
        [styles.CLASSNAMES.containerDisabled]: props.isDisabled,
      })}
    >
      <reactSelect.ItemIndicator className={styles.CLASSNAMES.indicator}>
        <icons.IconCheck />
      </reactSelect.ItemIndicator>
      <reactSelect.ItemText>{props.children}</reactSelect.ItemText>
    </reactSelect.Item>
  );
});
