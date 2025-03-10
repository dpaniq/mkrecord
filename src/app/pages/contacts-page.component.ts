import { Component } from '@angular/core';
import { ContactsComponent } from '../features/contacts/contacts.component';

@Component({
    selector: 'app-contacts-page',
    imports: [ContactsComponent],
    template: ` <app-contacts /> `
})
export class ContactsPageComponent {}
