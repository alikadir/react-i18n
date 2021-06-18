import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "tr",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        clock: {
          timeZone: "your time-zone: {{ timeZone}}",
          warning: "don't change time zone of user at production!"
        },
        amount: "Amount",
        counter: "Counter: $t(second, {{count}})",
        second: "{{count}}. second",
        aboutH1: "Hello Ali 👋🏿",
        aboutH2: "Change language to see some magic happen!"
      }
    },
    tr: {
      translation: {
        clock: {
          timeZone: "senin time-zone'un: {{timeZone}}",
          warning: "canlida kullanicinin time-zone'unu degistirme!"
        },
        amount: "Tutar",
        counter: "Sayac $t(second, {{count}})",
        second: "{{count}}. saniye",
        aboutH1: "Merhaba Ali 👋",
        aboutH2: "Bazı sihirlerin gerçekleştiğini görmek için dili değiştirin!"
      }
    },
    hi: {
      translation: {
        clock: {
          timeZone: "आपका समय-क्षेत्र इसमें: {{timeZone}}",
          warning: "लाइव में उपयोगकर्ता का 'समय-क्षेत्र' न बदलें!"
        },
        amount: "रकम",
        counter: "काउंटर $t(second, {{count}})",
        second: "{{count}}. दूसरा",
        aboutH1: "हैलो Ali 👋🏽",
        aboutH2: "कुछ जादू होता देखने के लिए भाषा बदलें!"
      }
    }
  }
});

i18n.on("languageChanged", (lang) => {
  document.documentElement.lang = lang;
});

export default i18n;
