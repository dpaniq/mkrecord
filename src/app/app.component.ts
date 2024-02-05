import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    // Custom
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [VideoService],
})
export class AppComponent implements AfterViewInit {
  #videoService = inject(VideoService);
  videoURLSignal = this.#videoService.videoURL;

  @ViewChild('videoDialog') dialog!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit() {
    // child is set
    console.log(this.dialog);

    this.dialog.nativeElement;

    this.#videoService.setDialogRef(this.dialog);
  }
}
