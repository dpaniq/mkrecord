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

const batteryIcons = [
  'battery_1_bar',
  'battery_2_bar',
  'battery_3_bar',
  'battery_4_bar',
  'battery_5_bar',
  'battery_full',
];

@Component({
  selector: 'app-camera-battery',
  imports: [CommonModule, MatIconModule],
  styles: [
    `
      :host {
        writing-mode: vertical-lr;
        text-orientation: sideways-right;
        padding-right: 10px;
      }

      mat-icon {
        color: var(--color_whitesmoke_darken_4);
        transform: scale(2);
      }

      @media (max-width: 768px) {
        mat-icon {
          transform: scale(2);
        }
      }
    `,
  ],
  template: ` <mat-icon [fontIcon]="batteryIcon()" /> `,
})
export class CameraBatteryComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly batterySignal = signal<boolean>(true);
  protected readonly batteryIcon = signal<string>(batteryIcons.at(3)!);

  ngOnInit() {
    // Run on browser;
    if (isPlatformBrowser(this.platformId)) {
      interval(1500)
        .pipe(
          map(timer => timer % 2 === 0),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(timer => {
          this.batterySignal.update(() => timer);

          this.batteryIcon.set(batteryIcons.at(timer ? 2 : 3)!);
        });
    }
  }
}
