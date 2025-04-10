import { Component } from '@angular/core';
import { InfoComponent } from '../features/info.component';

@Component({
  selector: 'app-info-page',
  imports: [InfoComponent],
  template: ` <app-info /> `,
  styles: `:host {
    display: flex;
    justify-content: center;
    align-items: center;
  }`,
})
export class InfoPageComponent {}
