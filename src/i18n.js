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
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  .init({
    debug: true,
    lng: fallbackLng,
    fallbackLng,
    whitelist: ['tr', 'en', 'per', 'gr'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;