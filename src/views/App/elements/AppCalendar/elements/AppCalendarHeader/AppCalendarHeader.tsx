import type { FC } from 'react';
import type { AppCalendarHeaderProps } from './AppCalendarHeader.types.ts';

import * as styles from './AppCalendarHeader.styles.ts';
import * as components from '../../../../../../components';

import { useTranslation } from 'react-i18next';

export const AppCalendarHeader: FC<AppCalendarHeaderProps> = ({ tools }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.Typography
        type={components.TYPOGRAPHY_TYPE.TITLE_2}
        size={components.TYPOGRAPHY_SIZE.XL}
      >
        {t('views.App.AppHeader.title', 'To do items')}
      </components.Typography>
      <div className={styles.CLASSNAMES.icons}>{tools}</div>
    </div>
  );
};
