import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Signal,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  Subject,
  Subscription,
  debounceTime,
  fromEvent,
  interval,
  takeUntil,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { VideoService } from '../../services/video.service';
import { PORTFOLIO_TIMELINE_LIST } from './constants';

@Component({
    selector: 'app-portfolio-timeline',
    imports: [CommonModule, MatIconModule, NgOptimizedImage],
    templateUrl: './portfolio-timeline.component.html',
    styleUrl: './portfolio-timeline.component.css',
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioTimelineComponent implements OnInit {
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

  private readonly unsubscribe = new Subject<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // SSR
    if (isPlatformBrowser(this.platformId)) {
      interval(5000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(x => {
          this.activePreview.update(currentIndex => {
            if (currentIndex === PORTFOLIO_TIMELINE_LIST.length - 1) {
              return 0;
            }
            return currentIndex + 1;
          });
        });
    }
  }
}
