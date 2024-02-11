import { Component } from '@angular/core';
import { PortfolioTimelineComponent } from '../portfolio-timeline/portfolio-timeline.component';
import { ParallaxItemDirective } from '../../shared/directives/parrallax-item.directive';

@Component({
  selector: 'app-home-brand',
  standalone: true,
  imports: [PortfolioTimelineComponent, ParallaxItemDirective],
  templateUrl: './home-brand.component.html',
  styleUrl: './home-brand.component.css',
})
export class HomeBrandComponent {}
