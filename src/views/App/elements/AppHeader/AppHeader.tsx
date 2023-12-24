import type { FC } from 'react';

import * as styles from './AppHeader.styles.ts';
import * as components from 'components';
import * as elements from './elements';

import { useTranslation } from 'react-i18next';

export const AppHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.CLASSNAMES.container}>
      <components.Typography
        type={components.TYPOGRAPHY_TYPE.TITLE_2}
        size={components.TYPOGRAPHY_SIZE.XL}
      >
        {t('views.App.AppHeader.title', 'To do items')}
      </components.Typography>
      <div className={styles.CLASSNAMES.icons}>
        <elements.LanguagesMenu />
        {/*<components.IconButton*/}
        {/*  type={components.ICON_BUTTON_TYPE.TERTIARY}*/}
        {/*  size={components.ICON_BUTTON_SIZE.LG}*/}
        {/*  Icon={components.IconQuestionCircled}*/}
        {/*/>*/}
      </div>
    </div>
  );
};
