import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

var fallbackLng;

var pathname = window.location.pathname;
  pathname.indexOf(1);
  pathname.toLowerCase();
  pathname = pathname.split("/")[1];
  if (pathname === 'per' || pathname === 'en' || pathname === 'gr' || pathname === 'tr') {
    fallbackLng = pathname;
  } else {
    fallbackLng = 'en';
  }

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: fallbackLng,
    fallbackLng,
    whitelist: ['tr', 'en', 'per', 'gr'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;