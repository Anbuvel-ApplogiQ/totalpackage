import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../local/en.json';
import ta from '../local/ta.json';

export const languageResources = {
  en: {translation: en},
  ta: {translation: ta},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;