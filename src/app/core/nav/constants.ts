type NavLanguage = Record<
  'home' | 'portfolio' | 'info' | 'contactMe',
  Record<Language, string>
>;

export const NAVIGATION: NavLanguage = {
  home: {
    en: 'Home',
    lv: 'Sākums',
    ru: 'Главная',
  },
  portfolio: {
    en: 'Portfolio',
    lv: 'Portfelis',
    ru: 'Портфолио',
  },
  info: {
    en: 'Info',
    lv: 'Informācija',
    ru: 'Информация',
  },
  contactMe: {
    en: 'Contact me',
    lv: 'Sazinies ar mani',
    ru: 'Свяжитесь со мной',
  },
};
