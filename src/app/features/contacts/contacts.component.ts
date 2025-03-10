import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'app-contacts',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  formGroup = new FormGroup({
    email: new FormControl<string | null>(null, {
      validators: [Validators.email, Validators.required],
    }),
    text: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
  });
}
