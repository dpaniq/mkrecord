import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PortfolioBlockComponent } from '../features/portfolio-block/portfolio-block.component';

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

@Component({
  selector: 'app-portfolio-page',
  imports: [
    MatChipsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    PortfolioBlockComponent,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
  ],
  styles: [
    `
      :host {
        z-index: 9999;
        min-height: 65vh;
        overflow: hidden;
      }

      section.content {
      }

      .mat-mdc-standard-chip {
        border-radius: 0;

        button::before {
          border-radius: 0 !important;
        }
      }

      :host {
        mat-icon {
          color: tomato;
        }

        mat-chip-listbox {
          max-width: 100%;
        }

        ::ng-deep
          .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
          background-color: tomato;
        }

        ::ng-deep .mat-mdc-chip-set-stacked .mdc-evolution-chip-set__chips {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          gap: 4px 6px;
        }

        ::ng-deep
          .mat-mdc-chip-set-stacked
          .mdc-evolution-chip__text-label.mat-mdc-chip-action-label {
          color: tomato;
        }

        ::ng-deep
          .mat-mdc-standard-chip.mdc-evolution-chip--selected:not(
            .mdc-evolution-chip--disabled
          ) {
          background-color: tomato;
          color: black;
          border-color: tomato;
        }

        ::ng-deep
          .mat-mdc-standard-chip
          .mdc-evolution-chip__action--primary::before {
          color: blue;
          border-radius: 0 !important;
          border-color: tomato;
        }
      }
    `,
    `
      .mat-tab-group {
        margin-bottom: 48px;
      }
    `,
  ],
  template: `
    <mat-tab-group animationDuration="1000ms">
      @for (category of categories; track category) {
        <mat-tab [label]="category">
          <app-portfolio-block
            [gridView]="gridView()"
            [portfolios]="categoryTree[category]" />
        </mat-tab>
      }
    </mat-tab-group>
  `,
  providers: [DeviceDetectorService],
})
export class PortfolioPageComponent {
  private readonly deviceSerivce = inject(DeviceDetectorService);

  public readonly actualCategory = signal<CategoryEnum>(
    CategoryEnum.Commercial
  );

  public readonly gridView = signal<string>(
    this.deviceSerivce.isMobile() ? '1' : '3'
  );

  public readonly portfoliosFiltered = computed(() => {
    return PORTFOLIO_CATEGORY_LIST[this.actualCategory()];
  });

  public readonly categories = Object.values(CategoryEnum);
  protected readonly categoryTree = PORTFOLIO_CATEGORY_LIST;

  changeCategory(value: CategoryEnum) {
    this.actualCategory.set(value);
  }

  onUpdateGridSize(gridSize: '2' | '3') {
    // TODO 1 for phone, 3 for desktop
    this.gridView.update(() => gridSize);
  }
}
