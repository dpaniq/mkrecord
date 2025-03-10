import { Component } from '@angular/core';
import { InfoComponent } from '../features/info/info.component';

@Component({
    selector: 'app-info-page',
    imports: [InfoComponent],
    template: `
    <app-info />
  `,
    styles: `:host {
    width: 100%;
    height: 100%;;
  }`
})
export class InfoPageComponent {}
