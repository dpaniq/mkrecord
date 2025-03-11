import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  styles: [
    `
      header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 0;
        padding: 35px 0 !important;
        z-index: 9999;
      }

      @media (max-width: 768px) {
        app-nav {
          display: none;
        }
      }
    `,
  ],
  template: `
    <header>
      <app-nav />
    </header>
  `,
})
export class HeaderComponent {}
