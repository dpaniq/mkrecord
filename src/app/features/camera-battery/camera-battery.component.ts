import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { interval, map } from 'rxjs';

const initialDate = new Date().setHours(0, 0, 0, 0);

@Component({
    selector: 'app-camera-battery',
    imports: [CommonModule, MatIconModule],
    template: `
    @if (batterySignal()) {
      <mat-icon fontIcon="battery_5_bar"></mat-icon>
    } @else {
      <mat-icon fontIcon="battery_4_bar"></mat-icon>
    }
  `,
    styles: `
  :host {
    z-index: -1;
    point-events: none;
    max-width: max-content;
    max-height: max-content;
  }
    mat-icon {
      transform: scale(4);
    }

    @media (max-width: 768px) {
      mat-icon {
        transform: scale(2);
      }
    }
  `
})
export class CameraBatteryComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly batterySignal = signal<boolean>(true);

  ngOnInit() {
    // Run on browser;
    if (isPlatformBrowser(this.platformId)) {
      const date = new Date(Date.UTC(2024, 0, 1, 0, 0, 0, 0));

      interval(1500)
        .pipe(
          map(timer => timer % 2 === 0),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(timer => {
          this.batterySignal.update(() => timer);
        });
    }
  }
}
