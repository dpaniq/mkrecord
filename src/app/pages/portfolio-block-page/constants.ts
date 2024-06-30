export type Portfolio = {
  title: string;
  preview: string;
  videoUrl: string;
  category: string;
};

export enum CategoryEnum {
  Commercial = 'Commercial',
  Luxury = 'Luxury',
  Corporate = 'Corporate',
  Industrial = 'Industrial',
  Videoclip = 'Videoclip',
  Food = 'Food',
  Fashion = 'Fashion',
  Documentary = 'Documentary',
  ShortFilms = 'Short films',
  Sport = 'Sport',
  Backstage = 'Backstage',
}

export const PORTFOLIO_CATEGORY_LIST: Record<CategoryEnum, Portfolio[]> = {
  [CategoryEnum.Commercial]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Luxury]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },

    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },

    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Corporate]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Industrial]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Videoclip]: [
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Food]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Fashion]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Documentary]: [
    {
      title: 'Exploring the Hidden Gems of Tokyo: Off the Beaten Path',
      preview: 'assets/img/gif/sky.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title: 'Mastering the Art of French Cuisine: Cooking Class Series',
      preview: 'assets/img/gif/american-gods.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ].reverse(),
  [CategoryEnum.ShortFilms]: [
    {
      title: 'The Science of Sleep: Tips for Better Rest and Productivity',
      preview: 'assets/img/gif/joker.webp',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Sport]: [
    {
      title:
        'Adventure in the Amazon: Exploring Wildlife and Indigenous Culture',
      preview: 'assets/img/gif/coin.gif',
      videoUrl: 'assets/videos/barber-shop-2.mp4',
      category: '',
    },
  ],
  [CategoryEnum.Backstage]: [
    {
      title: 'From Sketch to Screen: Behind the Scenes of Animation Production',
      preview: 'assets/img/gif/american-gods-2.gif',
      videoUrl: 'assets/videos/test.mp4',
      category: '',
    },
  ],
};
