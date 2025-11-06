import { CategoryEnum } from './constants';

type Language = 'en' | 'lv' | 'ru';

type PortfolioCategory = {
  title: string;
  preview: string;
  videoId: string;
  category: import('./constants').CategoryEnum;
};

type Portfolio = Record<CategoryEnum, PortfolioCategory[]>;
