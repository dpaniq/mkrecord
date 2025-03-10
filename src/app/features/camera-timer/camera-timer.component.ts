import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map, scan } from 'rxjs';

const initialDate = new Date().setHours(0, 0, 0, 0);

@Component({
    selector: 'app-camera-timer',
    imports: [CommonModule],
    template: `
    {{ timerSignal() | date: 'HH:mm:ss:SSS' }}
  `,
    styles: `
    :host {
      font-size: 40px;
      font-weight: 900;
    }
  `
})
export class CameraTimerComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly timerSignal = signal('2024-12-31T00:00:00.000Z');

  ngOnInit() {
    // Run on browser;
    if (isPlatformBrowser(this.platformId)) {
      const date = new Date(Date.UTC(2024, 0, 1, 0, 0, 0, 0));

      interval(1)
        .pipe(
          scan((acc, curr) => {
            acc.setMilliseconds(acc.getMilliseconds() + 1);
            return acc;
          }, date),
          map(timer => timer.toISOString().slice(0, 23)),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(timer => {
          this.timerSignal.update(() => timer);
        });
    }
  }
}
