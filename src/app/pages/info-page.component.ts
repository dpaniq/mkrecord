import { Component } from '@angular/core';
import { InfoComponent } from '../features/info/info.component';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [InfoComponent],
  template: `<app-info />`,
})
export class InfoPageComponent {}
