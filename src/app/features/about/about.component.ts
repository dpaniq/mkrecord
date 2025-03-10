import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  private intervalId!: any;
  images = signal([
    'assets/img/gif/coin.gif',
    'assets/img/gif/joker.webp',
    'assets/img/gif/sky.webp',
  ]);

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        const array = this.images();
        const lastPhoto = array.pop()!;
        console.log(array, lastPhoto);
        this.images.update(() => [lastPhoto, ...array]);
        this.cdr.detectChanges();
        this.cdr.markForCheck();
      }, 2500);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
