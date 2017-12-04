import { Meteor } from 'meteor/meteor';

import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(XHR).use(LanguageDetector).init({
  debug: Meteor.isDevelopment,
  fallbackLng: 'en',
  load: 'languageOnly',
  whitelist: ['en', 'ru'],
  detection: {
    order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lang',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLang',
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/i18n/{{lng}}.i18n.json',
  },
});

export default i18n;
