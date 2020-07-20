import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_fr from './locale/fr';
import common_en from './locale/en';

    i18n.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            fr: {
                common: common_fr
            },
        },
    });
export default i18n;
