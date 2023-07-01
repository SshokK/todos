import type { FC } from 'react';
import type { CalendarToolbarProps } from './CalendarToolbar.types.ts';

import * as styles from './CalendarToolbar.styles.ts';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../../../IconButton';

import { IconButton } from '../../../IconButton';
import { Toolbar } from '../../../Toolbar';
import { IconReload } from '../../../Icons';

import { useCalendarToolbarConfig } from './hooks';

export const CalendarToolbar: FC<CalendarToolbarProps> = ({
  config,
  onPrevPageClick,
  onNextPageClick,
  onPageReset,
}) => {
  const toolbarConfig = useCalendarToolbarConfig({
    props: {
      config,
      onPrevPageClick,
      onNextPageClick,
    },
  });

  return (
    <div className={styles.CLASSNAMES.container}>
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
    </div>
  );
};
