import { Injectable, signal, WritableSignal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly languageSignal = signal<Language>('en');

  readonly langSignal = this.languageSignal.asReadonly();

  set(language: Language) {
    this.languageSignal.set(language);
  }
}
