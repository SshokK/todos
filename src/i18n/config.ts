import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './en/translation.json';
import spanishTranslation from './es/translation.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debug: import.meta.env.DEV,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: englishTranslation,
    },
    es: {
      translation: spanishTranslation,
    },
  },
});
