import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

const cameraQualities = ['1080p', '1440p', '2160p'];

function randomChoice(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

@Component({
  selector: 'app-camera-quality-resolution',
  imports: [CommonModule],

  styles: [
    `
      p {
        color: rgba(245, 245, 245, 0.5);
        font-weight: 100;
      }
    `,
  ],
  template: `<p>{{ quality$ | async }}</p>`,
})
export class CameraQualityResolutionComponent {
  protected quality$ = interval(3000).pipe(
    startWith(randomChoice(cameraQualities)),
    map(() => randomChoice(cameraQualities))
  );
}
