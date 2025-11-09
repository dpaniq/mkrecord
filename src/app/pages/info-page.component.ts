import { Component } from '@angular/core';
import { InfoComponent } from '../features/info.component';

@Component({
  selector: 'app-info-page',
  imports: [InfoComponent],
  template: ` <app-info /> `,
  styles: `
    :host {
      display: flex;
      justify-content: center;
      align-items: start;
      height: 100%;
      padding: calc(10% + 2vh) 0;
    }
  `,
})
export class InfoPageComponent {}
