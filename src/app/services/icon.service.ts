import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IconService {
  #matIconRegistry = inject(MatIconRegistry);
  #domSanitizer = inject(DomSanitizer);

  constructor() {
    const svgs: { name: string; path: string }[] = [
      {
        name: 'telegram',
        path: 'telegram',
      },
      {
        name: 'youtube',
        path: 'youtube',
      },
      {
        name: 'facebook',
        path: 'facebook',
      },
      {
        name: 'instagram',
        path: 'instagram',
      },
      {
        name: 'linkedin',
        path: 'linkedin',
      },
      {
        name: 'gmail',
        path: 'gmail',
      },
    ];

    for (const { name, path } of svgs) {
      this.#matIconRegistry.addSvgIcon(
        name,
        this.#domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${path}.svg`,
        ),
      );
    }
  }
}
