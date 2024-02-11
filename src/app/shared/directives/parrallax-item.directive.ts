import { str } from 'envalid';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[parallaxItem]',
})
export class ParallaxItemDirective implements OnInit {
  // @Input() top;
  // @Input() left;
  // @Input() rotate = 30;
  // @Input() opacity = 1;
  // @Input() inversion = false;
  @Input() movement = 0.025;

  // input();

  // public newX;
  // public newY;
  constructor(private eleRef: ElementRef) {}

  private elementDOMRect!: DOMRect;

  ngOnInit(): void {
    // this.eleRef.nativeElement.style.position = 'absolute';
    // this.eleRef.nativeElement.style.top = this.top;
    // this.eleRef.nativeElement.style.left = this.left;
    this.eleRef.nativeElement.style.transform = `translate(0px, 0px)`;
    // this.eleRef.nativeElement.style.opacity = this.opacity;
    this.eleRef.nativeElement.style.transition =
      'transform 0.2s allow-discrete';

    // this.elementDOMRect = (
    //   this.eleRef.nativeElement as HTMLElement
    // )?.getBoundingClientRect();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.movement = this.movement ? this.movement : 0.025;

    const screenX = window.innerWidth;
    const screenY = window.innerHeight;
    const screenXHalf = screenX / 2;
    const screenYHalf = screenY / 2;

    const cursorX = e.pageX < screenXHalf ? -e.pageX : e.pageX;
    const cursorY = e.pageY < screenYHalf ? -e.pageY : e.pageY;

    const newX = cursorX * this.movement;
    const newY = cursorY * this.movement;

    // console.log(screenX, screenY, cursorX, cursorY, transform);

    const transform = `translate(${newX}px, ${newY}px)`;
    this.eleRef.nativeElement.style.transform = transform;
  }
}
