import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  images = signal([
    'assets/img/gif/coin.gif',
    'assets/img/gif/joker.webp',
    'assets/img/gif/sky.webp',
  ]);

  ngOnInit() {
    setInterval(() => {
      const lastPhoto = this.images().pop();
      this.images.update(() => [lastPhoto!, ...this.images()]);
    }, 1500);
  }
}
