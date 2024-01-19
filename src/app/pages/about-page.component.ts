import { Component } from '@angular/core';
import { AboutComponent } from '../features/about/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent],
  template: ` <app-about /> `,
})
export class AboutPageComponent {}
