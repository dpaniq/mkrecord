import { Component } from '@angular/core';
import { toggleFullscreen } from '../../shared/utils/fullscreen-api';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  onPlay(event: MouseEvent) {
    // console.log(event.)
    const videoTarget = document.getElementById('vid');
    if (videoTarget) {
      // TODO: move it to service
      toggleFullscreen(videoTarget as HTMLVideoElement);
    }
  }
}
