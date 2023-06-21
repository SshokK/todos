import type * as react from 'react';

import * as styles from './SelectScrollUpButton.styles';
import * as icons from '../../../Icons';
import * as reactSelect from '@radix-ui/react-select';

export const SelectScrollUpButton: react.FC = () => {
  return (
    <reactSelect.ScrollUpButton className={styles.CLASSNAMES.container}>
      <icons.IconChevronUp />
    </reactSelect.ScrollUpButton>
  );
};
