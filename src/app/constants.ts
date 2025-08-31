import { CategoryEnum, Portfolio } from './pages/portfolio-page.component';

export const PORTFOLIO_TIMELINE_LIST: {
  title: string;
  preview: string;
  videoUrl: string;
}[] = [
  {
    title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
    preview: 'assets/img/gif/sky.webp',
    videoUrl: 'assets/videos/test.mp4',
  },
  {
    title: 'Mastering the Art of French Cuisine: Cooking Class Series',
    preview: 'assets/img/gif/american-gods.gif',
    videoUrl: 'assets/videos/barber-shop-2.mp4',
  },
  {
    title: 'The Science of Sleep: Tips for Better Rest and Productivity',
    preview: 'assets/img/gif/joker.webp',
    videoUrl: 'assets/videos/test.mp4',
  },
  {
    title: 'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
    preview: 'assets/img/gif/coin.gif',
    videoUrl: 'assets/videos/barber-shop-2.mp4',
  },
  {
    title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
    preview: 'assets/img/gif/american-gods-2.gif',
    videoUrl: 'assets/videos/test.mp4',
  },
];

/**
 * 
 * ✅ Рекомендованные размеры превью для галереи/портфолио:
Размер	Пиксели	Где хорошо работает
480×270	(16:9)	Миниатюры в сетке, быстро грузятся
640×360	(16:9)	Более крупные превью с деталями
800×450	(16:9)	На планшетах, Retina дисплеях
960×540	(16:9)	Качественные, но всё ещё лёгкие */

export const PORTFOLIO_CATEGORY_LIST: Partial<
  Record<Partial<CategoryEnum>, Portfolio[]>
> = {
  // [CategoryEnum.Old]: [
  // {
  //   title: 'Don Lounge Place DLP',
  //   preview: '',
  //   // previews: {
  //   //   '1920x1080': 'assets/img/portfolio/bar.webp',
  //   //   '480x270': 'assets/img/portfolio/bar_480x270.webp',
  //   // },
  //   videoId: 'rFGxVhX-cIo',
  // },
  //   {
  //     title: 'Chef card 2020',
  //     preview: '',
  //     videoId: 'WpQ9We4P3SY',
  //   },
  //   {
  //     title: 'EcoDoge Biodegradable Dog Waste Bags',
  //     preview: '',
  //     videoId: 'A_oNTNvIlk0',
  //   },
  //   {
  //     title: 'Summer Event - Lucky Strike 2025',
  //     preview: '',
  //     videoId: 'PwYSRVlcPiQ',
  //   },
  //   {
  //     title: 'Sheep - 1 minute short film',
  //     preview: '',
  //     videoId: 'tfBvJPhKDC4',
  //   },
  //   {
  //     title: 'The Heart Behind AMDA: Inspiring Youth Through Global Education',
  //     preview: '',
  //     videoId: '8gb1c210VsI',
  //   },
  //   {
  //     title: 'Right Here Waiting cover - Funky MAF',
  //     preview: '',
  //     videoId: 'iMm1RVvJQn8',
  //   },
  //   {
  //     title: 'SAPRA: Global Alliance of Defence Product Manufacturers',
  //     preview: '',
  //     videoId: 'g3JLLp1EZxE',
  //   },
  //   {
  //     title: 'Startup Event',
  //     preview: '',
  //     videoId: 'Cui3R2zhiYs',
  //   },
  // ],
  // [CategoryEnum.New]: [
  //   {
  //     title: 'Adidas',
  //     preview: '',
  //     videoId: 'zPdz1fWr8vU',
  //   },
  //   {
  //     title: 'Body Language - Dance video',
  //     preview: '',
  //     videoId: 'qWJlQGqXulA',
  //   },
  //   {
  //     title: 'Masterclass: The Art of Cocktail Making',
  //     preview: '',
  //     videoId: '59LURni3C4E',
  //   },
  //   {
  //     title: 'THE DEDICATION CEREMONY INTO THE TATTOO CULTURE',
  //     preview: '',
  //     videoId: 'xSRh66AEkik',
  //   },
  //   {
  //     title: 'Luxury in the Details: Dainty Jewelry & Designer Mini Bag',
  //     preview: '',
  //     videoId: 'ikv_98KHOaE',
  //   },
  //   {
  //     title: 'Mastering the Art of Perfect Brows',
  //     preview: '',
  //     videoId: '8RkJtt3cQQc',
  //   },
  //   {
  //     title: 'Forget Socks – A Tattoo Is the Best Christmas Present!',
  //     preview: '',
  //     videoId: 'QI0cfe2hZcQ',
  //   },
  //   {
  //     title: 'Tattoo Master at Work: Art That Lives on Skin',
  //     preview: '',
  //     videoId: 'H7pAZtVKcyg',
  //   },
  // ],
  // [CategoryEnum.Commercial]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Luxury]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Corporate]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Industrial]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Videoclip]: [
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Food]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Fashion]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Documentary]: [
  //   {
  //     title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
  //     preview: 'assets/img/gif/sky.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'Mastering the Art of French Cuisine: Cooking Class Series',
  //     preview: 'assets/img/gif/american-gods.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ].reverse(),
  // [CategoryEnum.ShortFilms]: [
  //   {
  //     title: 'The Science of Sleep: Tips for Better Rest and Productivity',
  //     preview: 'assets/img/gif/joker.webp',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Sport]: [
  //   {
  //     title:
  //       'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
  //     preview: 'assets/img/gif/coin.gif',
  //     videoId: 'assets/videos/barber-shop-2.mp4',
  //     category: '',
  //   },
  // ],
  // [CategoryEnum.Backstage]: [
  //   {
  //     title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
  //     preview: 'assets/img/gif/american-gods-2.gif',
  //     videoId: 'assets/videos/test.mp4',
  //     category: '',
  //   },
  // ],
};
