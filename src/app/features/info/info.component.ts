import { Component } from '@angular/core';
import { REGALIAS, EXPERIENCES } from './constants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  regalias = REGALIAS;
  experiences = EXPERIENCES;
}
