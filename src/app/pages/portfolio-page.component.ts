import { Component, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PortfolioBlockComponent } from '../features/portfolio-block/portfolio-block.component';

export type PortfolioResolution =
  | '480x270'
  | '640x360'
  | '800x450'
  | '960x540'
  | '1920x1080';

export type Portfolio = {
  title: string;
  preview: string;
  videoId: string;
  category: 'horizontal' | 'vertical';
};

export enum CategoryEnum {
  Old = 'Old',
  New = 'New',
  // Commercial = 'Commercial',
  // Luxury = 'Luxury',
  // Corporate = 'Corporate',
  // Industrial = 'Industrial',
  // Videoclip = 'Videoclip',
  // Food = 'Food',
  // Fashion = 'Fashion',
  // Documentary = 'Documentary',
  // ShortFilms = 'Short films',
  // Sport = 'Sport',
  // Backstage = 'Backstage',
}

const PORTFOLIO_ASSET_SOURCE_PATH = 'assets/img/portfolio/480x270';

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
      ::ng-deep {
        .mdc-tab--active {
          background-color: var(--c_red);
        }
      }

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
          color: var(--c_red);
        }

        mat-chip-listbox {
          max-width: 100%;
        }

        ::ng-deep
          .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
          background-color: var(--c_red);
        }

        ::ng-deep .mat-mdc-chip-set-stacked .mdc-evolution-chip-set__chips {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          gap: 4px 6px;
        }

        ::ng-deep
          .mat-mdc-chip-set-stacked
          .mdc-evolution-chip__text-label.mat-mdc-chip-action-label {
          color: var(--c_red);
        }

        ::ng-deep
          .mat-mdc-standard-chip.mdc-evolution-chip--selected:not(
            .mdc-evolution-chip--disabled
          ) {
          background-color: var(--c_red);
          color: black;
          border-color: var(--c_red);
        }

        ::ng-deep
          .mat-mdc-standard-chip
          .mdc-evolution-chip__action--primary::before {
          color: blue;
          border-radius: 0 !important;
          border-color: var(--c_red);
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
            [portfolios]="portfolios" />
        </mat-tab>
      }
    </mat-tab-group>
  `,
  providers: [DeviceDetectorService],
})
export class PortfolioPageComponent {
  private readonly deviceSerivce = inject(DeviceDetectorService);

  public readonly actualCategory = signal<CategoryEnum>(CategoryEnum.New);

  public readonly gridView = signal<string>(
    this.deviceSerivce.isMobile() ? '1' : '3'
  );

  public readonly categories = Object.values(CategoryEnum);
  protected readonly portfolios: Portfolio[] = [
    {
      title: 'Don Lounge Place DLP',
      category: 'horizontal',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/bar_480x270.webm`,
      videoId: 'rFGxVhX-cIo',
    },
    {
      title: 'Chef card 2020',
      category: 'horizontal',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/cookerdoc_480x270.webm`,
      videoId: 'WpQ9We4P3SY',
    },
    {
      title: 'EcoDoge Biodegradable Dog Waste Bags',
      category: 'horizontal',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/dogcoin_480x270.webm`,
      videoId: 'A_oNTNvIlk0',
    },
    {
      title: 'Summer Event - Lucky Strike 2025',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/event_6_480x270.webm`,
      videoId: 'PwYSRVlcPiQ',
      category: 'horizontal',
    },
    {
      title: 'Sheep - 1 minute short film',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/movie1min_480x270.webm`,
      videoId: 'tfBvJPhKDC4',
      category: 'horizontal',
    },
    {
      title: 'The Heart Behind AMDA: Inspiring Youth Through Global Education',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/podcast1_480x270.webm`,
      videoId: '8gb1c210VsI',
      category: 'horizontal',
    },
    {
      title: 'Right Here Waiting cover - Funky MAF',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/song_480x270.webm`,
      videoId: 'iMm1RVvJQn8',
      category: 'horizontal',
    },
    {
      title: 'SAPRA: Global Alliance of Defence Product Manufacturers',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/speaker_480x270.webm`,
      videoId: 'g3JLLp1EZxE',
      category: 'horizontal',
    },
    {
      title: 'Startup Event',
      preview: `${PORTFOLIO_ASSET_SOURCE_PATH}/hacker_480x270.webm`,
      videoId: 'Cui3R2zhiYs',
      category: 'horizontal',
    },
  ];
}
