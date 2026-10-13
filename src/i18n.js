import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from "./locales/it";
import en from "./locales/en";
import fr from "./locales/fr";

i18n.use(initReactI18next).init({
  resources: {
    it: {
      translation: it,
    },
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },

  lng: localStorage.getItem("language") || "it",
  fallbackLng: "it",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
