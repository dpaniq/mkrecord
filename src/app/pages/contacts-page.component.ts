import { Component } from '@angular/core';
import { ContactsMeComponent } from '../features/contacts-me.component';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactsMeComponent],
  template: ` <app-contacts-me /> `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    `,
  ],
})
export class ContactsPageComponent {}
