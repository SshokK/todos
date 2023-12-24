import type { LanguagesMenuHandlers } from './useLanguagesMenuHandlers.types.ts';

import * as constants from '../LanguagesMenu.constants.ts';

import { useTranslation } from 'react-i18next';

export const useLanguagesMenuHandlers = (): LanguagesMenuHandlers => {
  const { i18n } = useTranslation();

  const handleLanguageChange: LanguagesMenuHandlers['handleLanguageChange'] =
    () => {
      const currentLanguageIndex = constants.LANGUAGES.findIndex(
        (language) => language === i18n.language,
      );
      const nextLanguageIndex =
        currentLanguageIndex === constants.LANGUAGES.length - 1
          ? 0
          : currentLanguageIndex + 1;

      i18n.changeLanguage(constants.LANGUAGES[nextLanguageIndex]);
    };

  return {
    handleLanguageChange,
  };
};
