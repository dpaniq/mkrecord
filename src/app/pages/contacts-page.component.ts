import { Component } from '@angular/core';
import { ContactsComponent } from '../features/contacts/contacts.component';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [ContactsComponent],
  template: ` <app-contacts /> `,
})
export class ContactsPageComponent {}
