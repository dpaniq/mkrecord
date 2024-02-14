import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ViewRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { VideoService } from './services/video.service';
import { SafePipe } from './shared/pipes/safe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, interval } from 'rxjs';
import { PORTFOLIO_TIMELINE_LIST } from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,

    // Custom
    HeaderComponent,
    FooterComponent,

    SafePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [VideoService, SafePipe],
})
export class AppComponent implements AfterViewInit {
  #destroyRef = inject(DestroyRef);
  #videoService = inject(VideoService);
  #safePipe = inject(SafePipe);
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
    // SSR
    // if (isPlatformBrowser(this.platformId)) {
    //   interval(10_000)
    //     .pipe(takeUntilDestroyed(this.destroyRef))
    //     .subscribe(_ => {
    //       this.activePreview.update(currentIndex => {
    //         if (currentIndex === PORTFOLIO_TIMELINE_LIST.length - 1) {
    //           return 0;
    //         }
    //         return currentIndex + 1;
    //       });
    //     });
    // }
  }
}
