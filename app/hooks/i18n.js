// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/hftbng.json';
import bn from '../../public/locales/bn/hftbng.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            bn: {
                translation: bn
            }
        },
        lng: "bn", // Default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
