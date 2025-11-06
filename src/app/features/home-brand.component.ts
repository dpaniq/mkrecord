import { Component, signal } from '@angular/core';
import { ParallaxItemDirective } from '../shared/directives/parrallax-item.directive';
import { PortfolioTimelineComponent } from './portfolio-timeline/portfolio-timeline.component';

@Component({
  selector: 'app-home-brand',
  imports: [PortfolioTimelineComponent, ParallaxItemDirective],
  styles: [
    `
      :host {
        position: relative;
        width: calc(95% - 200px);
        min-width: 230px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;

        justify-content: center;
        align-items: center;

        padding: 50px;
        border: 1px solid var(--color_whitesmoke_darken_5);
        border-top: none;
        border-left: none;
        background-color: rgba(0, 0, 0, 0.2);
      }

      .brand {
        display: flex;
        gap: 10px;
        flex-direction: column;
        width: calc(100vw - 60%);

        img.studio {
          padding: 10px 0;
          border-top: 4px solid whitesmoke;
        }
      }

      @media (max-width: 768px) {
        :host {
          width: calc(125% - 200px);
        }
      }
    `,
  ],
  template: `
    <div class="brand">
      <img class="mk" src="assets/brand/mk.svg" />
      <img class="studio" src="assets/brand/studio.svg" />
    </div>
  `,
})
export class HomeBrandComponent {
  readonly timelineImageSignal = signal<string | null>(null);
}
