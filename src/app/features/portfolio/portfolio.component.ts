import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_LIST } from './constants';

const ITEM_WIDTH = 800;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [],
})
export class PortfolioComponent implements AfterViewInit {
  readonly portfolioList = PORTFOLIO_LIST;

  #videoService = inject(VideoService);
  constructor(public dialog: MatDialog) {}

  // #destroyRef = inject(DestroyRef);
  @ViewChild('scrollContainer') scrollContainer: any;

  disabledLeft: boolean = true;
  disabledRight: boolean = false;

  @HostListener('document:keydown', ['$event'])
  setScroll(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      console.log(event.key);
      this.onScrollLeft();
    }

    if (event.key === 'ArrowRight') {
      this.onScrollRight();
    }
  }

  openDialog(videoUrl: string): void {
    // this.#videoService.set(videoUrl);
  }

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement as HTMLElement;
    const scrollWidth = container.scrollWidth;
    const scrolled = container.scrollLeft;
  }

  onScrollLeft() {
    const container = this.scrollContainer.nativeElement as HTMLElement;
    const scrolled = container.scrollLeft;

    // Ensure scrolled is a multiple of ITEM_WIDTH to avoid misalignment
    const finalWidth = Math.max(
      0,
      Math.floor(scrolled / ITEM_WIDTH) * ITEM_WIDTH - ITEM_WIDTH
    );
    container.scrollLeft = finalWidth;

    this.disabledLeft = finalWidth === 0;
    this.disabledRight = false;

    console.log({ scrolled, finalWidth });
  }

  onScrollRight() {
    const container = this.scrollContainer.nativeElement as HTMLElement;
    const scrollWidth = container.scrollWidth;
    const scrolled = container.scrollLeft;
    const lastIndex = Math.floor(scrollWidth / ITEM_WIDTH) - 1;

    // Ensure scrolled is a multiple of ITEM_WIDTH to avoid misalignment
    const finalWidth = Math.min(
      scrollWidth - container.clientWidth,
      Math.floor(scrolled / ITEM_WIDTH) * ITEM_WIDTH + ITEM_WIDTH
    );
    container.scrollLeft = finalWidth;

    this.disabledRight = finalWidth === scrollWidth - container.clientWidth;
    this.disabledLeft = false;

    console.log({ scrolled, finalWidth, lastIndex });
  }

  isCloseTo(number1: number, number2: number, tolerance = ITEM_WIDTH + 100) {
    // Проверяем, находится ли разница между числами в пределах заданной погрешности
    console.log(number1, number2, Math.abs(number1 - number2) <= tolerance);
    return Math.abs(number1 - number2) <= tolerance;
  }
}
