import {
  ElementRef,
  Injectable,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// TODO
// https://stackblitz.com/edit/angular-custom-dialog-with-dynamic-components?file=src%2Fapp%2Fdialog%2Finsertion.directive.ts

@Injectable()
export class VideoService {
  #dialogRef!: HTMLDialogElement;
  #videoURL = signal<string | null>(null);
  public videoURL = this.#videoURL.asReadonly();
  // public videoURLSignal = toObservable(this.#videoURL.asReadonly());
  public videoURLSignal = computed(() => {
    console.log('new value');
    return this.#videoURL();
  });

  set(videoURL: string) {
    console.log('set video URL');
    this.#videoURL.set(videoURL);
    this.#videoURL.update(() => videoURL);

    this.#dialogRef.showModal();
  }

  reset() {
    this.#videoURL.set(null);
  }

  setDialogRef(dialog: ElementRef<HTMLDialogElement>) {
    this.#dialogRef = dialog.nativeElement;
    console.log(dialog, this.#dialogRef);
    console.log(this.#dialogRef);
  }

  constructor() {}
}
