import { Component } from '@angular/core';
import { PortfolioComponent } from '../features/portfolio/portfolio.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [PortfolioComponent],
  template: `
    <app-portfolio />
  `,
})
export class PortfolioPageComponent {}
