import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  Inject,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, skip } from 'rxjs';
import { PORTFOLIO_TIMELINE_LIST } from './constants';
import { HeaderComponent } from './core/header.component';
import { CameraBatteryComponent } from './features/camera-battery/camera-battery.component';
import { CameraTimerComponent } from './features/camera-timer/camera-timer.component';

import { SafePipe } from './shared/pipes/safe.pipe';

import { PlatformModule } from '@angular/cdk/platform';
import { NavMobileComponent } from './core/nav-mobile.component';
import { CameraQualityResolutionComponent } from './features/camera-quality-resolution.component';
import { IconService } from './services/icon.service';

import { YouTubePlayer } from '@angular/youtube-player';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    // Custom
    HeaderComponent,
    NavMobileComponent,
    CameraTimerComponent,
    CameraBatteryComponent,
    CameraQualityResolutionComponent,
    SafePipe,
    YouTubePlayer,
    PlatformModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [SafePipe, IconService, DeviceDetectorService],
})
export class AppComponent {
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #safePipe = inject(SafePipe);
  private readonly iconService = inject(IconService);

  private readonly destroyRef = inject(DestroyRef);

  activePreview = signal<number>(0);
  timelineImage = computed(() => {
    const index = this.activePreview();
    const portfolio = PORTFOLIO_TIMELINE_LIST[index];
    const preview = portfolio?.preview;
    console.log(index, portfolio, preview);
    return preview;
  });

  readonly portfolioList = PORTFOLIO_TIMELINE_LIST;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initPhoneEvents();
    }
  }

  private initPhoneEvents() {
    this.#router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        skip(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.triggerVibration();
      });
  }

  private triggerVibration() {
    if (typeof navigator !== 'undefined' && navigator?.vibrate) {
      navigator.vibrate(100);
    } else {
      console.warn('Vibration API is not supported');
    }
  }
}
