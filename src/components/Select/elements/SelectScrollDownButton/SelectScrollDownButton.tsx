import type * as react from 'react';

import * as styles from './SelectScrollDownButton.styles';
import * as icons from '../../../Icons';
import * as reactSelect from '@radix-ui/react-select';

export const SelectScrollDownButton: react.FC = () => {
  return (
    <reactSelect.ScrollDownButton className={styles.CLASSNAMES.container}>
      <icons.IconChevronDown />
    </reactSelect.ScrollDownButton>
  );
};
