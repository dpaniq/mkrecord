import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  Inject,
  inject,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, skip } from 'rxjs';
import { PORTFOLIO_TIMELINE_LIST } from './constants';
import { FooterComponent } from './core/footer.component';
import { HeaderComponent } from './core/header.component';
import { CameraBatteryComponent } from './features/camera-battery/camera-battery.component';
import { CameraTimerComponent } from './features/camera-timer/camera-timer.component';
import { VideoService } from './services/video.service';
import { SafePipe } from './shared/pipes/safe.pipe';

import { PlatformModule } from '@angular/cdk/platform';
import { NavMobileComponent } from './core/nav-mobile.component';
import { CameraQualityResolutionComponent } from './features/camera-quality-resolution/camera-quality-resolution.component';
import { IconService } from './services/icon.service';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    // Custom
    HeaderComponent,
    FooterComponent,
    NavMobileComponent,
    CameraTimerComponent,
    CameraBatteryComponent,
    CameraQualityResolutionComponent,
    SafePipe,
    PlatformModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [VideoService, SafePipe, IconService, DeviceDetectorService],
})
export class AppComponent implements AfterViewInit {
  #destroyRef = inject(DestroyRef);
  #videoService = inject(VideoService);
  #router = inject(Router);
  #safePipe = inject(SafePipe);
  private readonly iconService = inject(IconService);

  videoURL$ = this.#videoService.videoURL$;

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('source') source!: ElementRef<HTMLSourceElement>;

  ngAfterViewInit() {
    // child is set

    this.#videoService.setDialogRef(this.dialog);

    this.videoURL$
      .pipe(filter(Boolean), takeUntilDestroyed(this.#destroyRef))
      .subscribe(url => {
        console.log(this.dialog, this.video, this.source);

        // https://stackoverflow.com/questions/5235145/changing-source-on-html5-video-tag

        const video = this.video.nativeElement;
        const source = this.source.nativeElement;

        video.pause();
        source.setAttribute('src', url);
        source.setAttribute('type', 'video/mp4');

        video.currentTime = 0;
        video.load();
        video.play();

        this.dialog.nativeElement.setAttribute('src', url);
      });
  }

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
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.triggerVibration();
      });
  }

  private triggerVibration() {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(100);
    } else {
      console.warn('Vibration API is not supported');
    }
  }
}
