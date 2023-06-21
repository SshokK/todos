import type * as types from './SelectGroup.types';

import * as react from 'react';
import * as reactSelect from '@radix-ui/react-select';
import * as styles from './SelectGroup.styles';
import * as elements from './elements';

export const SelectGroup: react.FC<types.SelectGroupProps> = ({ group }) => {
  return (
    <reactSelect.Group className={styles.CLASSNAMES.group}>
      {group.label && (
        <reactSelect.Label className={styles.CLASSNAMES.groupLabel}>
          {group.label}
        </reactSelect.Label>
      )}
      {group.options?.map((option) => (
        <elements.SelectItem
          key={option.key}
          value={option.key}
          isDisabled={option.isDisabled}
        >
          {option.label}
        </elements.SelectItem>
      ))}
    </reactSelect.Group>
  );
};
