import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import { YOUTUBE_PLAYER_CONFIG, YouTubePlayer } from '@angular/youtube-player';

export interface DialogData {
  url: string;
  title: string;
  preview: string;
  videoUrl: string;
  category: string;
}

@Component({
  selector: 'app-video-dialog',
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    YouTubePlayer,
    MatButtonModule,
  ],
  styles: [
    `
      :host {
        // background-color: black;
        padding: 40px;
        overflow: hidden;
        border-radius: 10px;
        // height: 420px;
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;

        h1 {
          color: tomato;
        }
      }

      mat-dialog-container {
        background-color: transparent;
        // padding: 20px;
        overflow: hidden;
      }

      ::ng-deep.mat-mdc-dialog-surface {
        background-color: transparent;
      }

      youtube-player {
        display: block;
        height: 390px;
        overflow: hidden;
      }

      ::ng-deep .youtube-player-placeholder-button {
        display: flex;

        justify-content: center;
      }

      button.close-button {
        position: absolute;
        border-radius: 50%;
        right: 5px;
        top: 5px;
        z-index: 9999;
        text-shadow: 1px 1px 1px black;

        &:hover {
          color: tomato;
        }
      }
    `,
  ],
  template: `
    <button
      class="close-button"
      mat-dialog-close
      mat-icon-button
    >
      ✖
    </button>

    <!-- <h1 mat-dialog-title>{{ data.title | uppercase }}</h1> -->

    @if (data.url) {
      <youtube-player
        videoId="jYlosSo79YY"
        [playerVars]="{ autoplay: 0, controls: 1, color: 'red' }"
        placeholderImageQuality="high"
        [disablePlaceholder]="false"
      />
    }
  `,
  providers: [
    {
      provide: YOUTUBE_PLAYER_CONFIG,
      useValue: {
        // loadApi: false,
      },
    },
  ],
})
export class VideoDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<VideoDialogComponent>);
  public readonly data = inject<DialogData>(MAT_DIALOG_DATA);
}
