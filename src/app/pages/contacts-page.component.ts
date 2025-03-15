import { Component, OnDestroy } from '@angular/core';
import { ContactsMeComponent } from '../features/contacts-me.component';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactsMeComponent],
  template: `
    <app-contacts-me />
  `,
})
export class ContactsPageComponent implements OnDestroy {
  ngOnDestroy() {
    console.log('destroy');
  }
}
