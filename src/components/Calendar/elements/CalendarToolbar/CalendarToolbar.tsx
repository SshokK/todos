import type { FC } from 'react';
import type { CalendarToolbarProps } from './CalendarToolbar.types.ts';

import * as styles from './CalendarToolbar.styles.ts';

import { ICON_BUTTON_SIZE, ICON_BUTTON_TYPE } from '../../../IconButton';

import { IconButton } from '../../../IconButton';
import { Toolbar } from '../../../Toolbar';
import { IconReload } from '../../../Icons';

import { useTranslation } from 'react-i18next';
import { useCalendarToolbarConfig } from './hooks';

export const CalendarToolbar: FC<CalendarToolbarProps> = ({
  date,
  onConfigRender,
  onPrevPageClick,
  onNextPageClick,
  onPageReset,
  onJumpToDate,
  children,
}) => {
  const { t } = useTranslation();

  const toolbarConfig = useCalendarToolbarConfig({
    props: {
      date,
      onConfigRender,
      onPrevPageClick,
      onNextPageClick,
      onJumpToDate,
    },
  });

  return (
    <header className={styles.CLASSNAMES.container}>
      <Toolbar config={toolbarConfig} />
      {children}
      <IconButton
        Icon={IconReload}
        type={ICON_BUTTON_TYPE.SECONDARY}
        size={ICON_BUTTON_SIZE.LG}
        onClick={onPageReset}
        tooltip={{
          title: t(
            'components.Calendar.CalendarToolbar.pageResetButtonTooltip',
            'Jump to today',
          ),
        }}
      />
    </header>
  );
};
