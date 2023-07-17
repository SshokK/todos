import type { FC } from 'react';
import type { CalendarToolbarProps } from './CalendarToolbar.types.ts';

import * as styles from './CalendarToolbar.styles.ts';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../../../IconButton';

import { IconButton } from '../../../IconButton';
import { Toolbar } from '../../../Toolbar';
import { IconReload } from '../../../Icons';

import { useCalendarToolbarConfig } from './hooks';

export const CalendarToolbar: FC<CalendarToolbarProps> = ({
  date,
  config,
  onPrevPageClick,
  onNextPageClick,
  onPageReset,
  onJumpToDate,
}) => {
  const toolbarConfig = useCalendarToolbarConfig({
    props: {
      date,
      config,
      onPrevPageClick,
      onNextPageClick,
      onJumpToDate,
    },
  });

  return (
    <header className={styles.CLASSNAMES.container}>
      <Toolbar config={toolbarConfig} />
      <IconButton
        Icon={IconReload}
        type={ICON_BUTTON_TYPE.SECONDARY}
        size={ICON_BUTTON_SIZE.LG}
        onClick={onPageReset}
        tooltip={{
          title: 'Jump to today',
        }}
      />
    </header>
  );
};
