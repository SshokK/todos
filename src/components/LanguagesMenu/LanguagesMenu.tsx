import type { FC } from 'react';

import * as components from '../index.ts';

import { useTranslation } from 'react-i18next';
import { useLanguagesMenuHandlers } from './hooks';

export const LanguagesMenu: FC = () => {
  const { i18n } = useTranslation();

  const handlers = useLanguagesMenuHandlers();

  return (
    <components.IconButton
      type={components.ICON_BUTTON_TYPE.TERTIARY}
      size={components.ICON_BUTTON_SIZE.LG}
      Icon={components.IconGlobe}
      badge={i18n.language}
      onClick={handlers.handleLanguageChange}
    />
  );
};
