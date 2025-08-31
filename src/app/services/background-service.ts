import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const PORTFOLIO_ASSET_SOURCE_PATH = 'assets/img/portfolio/480x270';
const horizonalVideos = [
  `${PORTFOLIO_ASSET_SOURCE_PATH}/bar_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/cookerdoc_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/dogcoin_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/event_6_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/movie1min_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/podcast1_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/song_480x270.webm`,
  // `${PORTFOLIO_ASSET_SOURCE_PATH}/speaker_480x270.webm`,
  `${PORTFOLIO_ASSET_SOURCE_PATH}/hacker_480x270.webm`,
];

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  private setIntervalId: NodeJS.Timeout | undefined;
  private readonly _videoBackground = signal<{
    isOn: boolean;
    videoSrc?: string;
  }>({ isOn: false });
  public readonly videoBackground = this._videoBackground.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(url => {
          console.log('URL changed', url);

          const isOnPortfolio = this.router.url.includes('portfolio');

          if (isOnPortfolio) {
            this._videoBackground.set({ isOn: false });
            this.setIntervalId && clearInterval(this.setIntervalId);
          } else {
            this._videoBackground.set({
              isOn: true,
              videoSrc: horizonalVideos[0],
            });
            this.run();
          }
        });
    }
  }

  run(): void {
    let src = '';
    let last3Idx: number[] = [];
    this.setIntervalId = setInterval(() => {
      // if (this.videoBackground().isOn === true) {
      //   this.videoBackground.set({ isOn: false });
      //   return;
      // }

      while (true) {
        const randomIdx = Math.floor(Math.random() * horizonalVideos.length);

        // Add video if not in last 3
        if (!last3Idx.includes(randomIdx)) {
          last3Idx.push(randomIdx);
          src = horizonalVideos[randomIdx];
          if (last3Idx.length > 4) {
            last3Idx.shift();
          }
          break;
        }
      }

      this._videoBackground.set({ isOn: true, videoSrc: src });
    }, 5_000);
  }
}
