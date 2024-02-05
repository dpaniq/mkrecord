import { Component } from '@angular/core';
import { REGALIAS, EXPERIENCES } from './constants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  readonly lang = this.i18nService.langSignal;
  readonly regalias = REGALIAS;
  readonly experiences = EXPERIENCES;

  constructor(private i18nService: I18nService) {}
}
