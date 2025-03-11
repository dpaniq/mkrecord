import { Component } from '@angular/core';
import { HomeBrandComponent } from './../features/home-brand/home-brand.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeBrandComponent],
  styles: `
  :host {
    width:100%;
    
  }
 `,
  template: `
    <app-home-brand />
  `,
})
export class HomePageComponent {}
