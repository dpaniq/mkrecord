import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
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
  standalone: true,
  imports: [CommonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './portfolio-timeline.component.html',
  styleUrl: './portfolio-timeline.component.css',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioTimelineComponent implements OnInit, OnDestroy {
  activePreview = signal<number>(0);

  readonly portfolioList = PORTFOLIO_TIMELINE_LIST;

  private readonly unsubscribe = new Subject<void>();

  ngOnInit() {
    // this.x = interval(3000)
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe(x => {
    //     this.activePreview.update(currentIndex => {
    //       if (currentIndex === PORTFOLIO_TIMELINE_LIST.length) {
    //         return 0;
    //       }
    //       return currentIndex + 1;
    //     });
    //   });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
