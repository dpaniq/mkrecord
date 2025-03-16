import { Component } from '@angular/core';

@Component({
  selector: 'app-camera-rec',
  imports: [],
  styles: [
    `
      :host {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        color: var(--color_whitesmoke_darken_4);

        animation: rec 3s infinite forwards step-end;

        img.rec-dot {
          width: 24px;
        }

        .rec-word {
          font-weight: 400;
          color: var(--c_primary);
        }
      }

      @keyframes rec {
        0% {
          filter: none;
        }

        50% {
          filter: grayscale(1) brightness(1);
        }
      }
    `,
  ],
  template: `
    <img class="rec-dot" src="assets/brand/dot.svg" />
    <span class="rec-word">REC</span>
  `,
})
export class CameraRecComponent {}
