import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CategoryEnum, portfolios } from '../constants';

const horizonalVideos = portfolios[CategoryEnum.Horizontal];

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private setIntervalId: NodeJS.Timeout | undefined;
  private readonly _videoBackground = signal<{
    isOn: boolean;
    videoSrc?: string;
  }>({ isOn: false });
  public readonly videoBackground = this._videoBackground.asReadonly();

  public init() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('BackgroundService initialized');
      this.router.events
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe(url => {
          const isOnPortfolio = this.router.url.includes('portfolio');

          console.log('URL changed', { url, isOnPortfolio });

          if (isOnPortfolio) {
            this._videoBackground.set({ isOn: false });
            this.setIntervalId && clearInterval(this.setIntervalId);
          } else {
            this._videoBackground.set({
              isOn: true,
              videoSrc: horizonalVideos.at(0)!.preview,
            });
            this.run();
          }
        });
    }
  }

  run(): void {
    let src = '';
    let last3Idx: number[] = [];

    if (this.setIntervalId) {
      clearInterval(this.setIntervalId);
    }

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
          src = horizonalVideos[randomIdx]?.preview;
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
