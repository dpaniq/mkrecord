import { HomeBrandComponent } from './../features/home-brand/home-brand.component';
import { Component } from '@angular/core';
import { IntroComponent } from '../features/intro/intro.component';
import { AboutComponent } from '../features/about/about.component';
import { PortfolioTimelineComponent } from '../features/portfolio-timeline/portfolio-timeline.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    IntroComponent,
    AboutComponent,
    HomeBrandComponent,
    PortfolioTimelineComponent,
  ],
  styles: `
  :host {
    app-intro {
      z-index: 9999;
    }
    app-about {
      z-index: -1;
      position: absolute;
      top:13%;
      right:39%;
      transform:scale(1.1)
    }
  }
 `,
  template: `
    <!-- <app-about /> <app-intro /> -->
    <app-home-brand />
    <!-- <app-portfolio-timeline /> -->
  `,
})
export class HomePageComponent {}
