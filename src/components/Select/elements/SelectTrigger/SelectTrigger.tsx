import type * as types from './SelectTrigger.types';
import type * as react from 'react';

import * as styles from './SelectTrigger.styles';
import * as reactSelect from '@radix-ui/react-select';
import * as icons from '../../../Icons';

import classnames from 'classnames';

export const SelectTrigger: react.FC<types.SelectTriggerProps> = ({
  placeholder,
}) => {
  return (
    <reactSelect.Trigger className={styles.CLASSNAMES.trigger}>
      <div
        className={classnames({
          [styles.CLASSNAMES.value]: true,
        })}
      >
        <reactSelect.Value placeholder={placeholder} />
      </div>
      <reactSelect.Icon className={styles.CLASSNAMES.triggerIcon}>
        <icons.IconCaretDown />
      </reactSelect.Icon>
    </reactSelect.Trigger>
  );
};
