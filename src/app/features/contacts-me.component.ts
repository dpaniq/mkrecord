import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from '../core/footer.component';

@Component({
  selector: 'app-contacts-me',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FooterComponent,
  ],
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        justify-content: center;
        max-width: 300px;
        text-wrap: balance;

        q {
          text-align: center;
        }

        border: 1px solid var(--color_whitesmoke_darken_5);

        padding: 20px;

        & mat-form-field {
          width: 100%;
        }
      }

      form#contacts {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        fieldset {
          display: grid;
        }

        textarea {
          resize: vertical;
          max-height: 30vh;
        }

        button:disabled {
          cursor: not-allowed;
        }

        button[type='submit'] {
          &:disabled {
            cursor: not-allowed;
          }
          &:hover {
            border: 1px solid whitesmoke;
          }
        }
      }
    `,
  ],
  template: `
    <form
      id="contacts"
      [formGroup]="formGroup"
      (submit)="$event.preventDefault()">
      <q>Tell me about your project, and I’ll bring it to life.</q><br />
      <q>Let’s make magic on camera! </q><br />

      <mat-form-field class="example-full-width" appearance="outline">
        <mat-label>Email</mat-label>
        <input
          matInput
          type="email"
          placeholder="Input your email"
          formControlName="email" />
      </mat-form-field>

      <mat-form-field class="example-full-width" appearance="outline">
        <mat-label>Leave a comment</mat-label>
        <textarea matInput rows="5" formControlName="text"></textarea>
      </mat-form-field>

      <button
        color="primary"
        mat-raised-button
        [disabled]="formGroup.invalid"
        type="submit">
        Send
      </button>
    </form>
    <app-footer />
  `,
})
export class ContactsMeComponent {
  formGroup = new FormGroup({
    email: new FormControl<string | null>(null, {
      validators: [Validators.email, Validators.required],
    }),
    text: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
  });
}
