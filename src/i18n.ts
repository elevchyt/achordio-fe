import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from 'assets/locales/en.json';
import elTranslation from 'assets/locales/el.json';

// Language resources
const resources = {
  en: {
    translation: enTranslation
  },
  el: {
    translation: elTranslation
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'el', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values to prevent XSS attacks
  },
});

export default i18n;