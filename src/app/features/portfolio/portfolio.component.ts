import {
  AfterViewInit,
  Component,
  DestroyRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, fromEvent, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

const ITEM_WIDTH = 800;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit {
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

  ngAfterViewInit() {}

  onScrollLeft() {
    // Offset / OffsetWidth
    const container = this.scrollContainer.nativeElement as HTMLElement;
    const scrollX = container.scrollLeft;

    const scrollPosition = container.scrollWidth;

    const result = scrollX - ITEM_WIDTH;
    if (result <= scrollPosition) {
      this.disabledLeft = true;
    }
    this.disabledRight = false;
    container.scrollLeft = result;
  }

  onScrollRight() {
    const container = this.scrollContainer.nativeElement as HTMLElement;

    const scrollPosition = container.scrollWidth;
    const scrollX = container.scrollLeft;

    const result = scrollX + ITEM_WIDTH;
    if (result >= scrollPosition) {
      this.disabledRight = true;
    }
    this.disabledLeft = false;
    container.scrollLeft = result;
  }
}
