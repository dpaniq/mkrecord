import { Component } from '@angular/core';
import { IntroComponent } from '../features/intro/intro.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroComponent],
  template: `<app-intro />`,
})
export class HomePageComponent {}
