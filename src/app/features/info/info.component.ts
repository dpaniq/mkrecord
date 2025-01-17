import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nService } from '../../shared/i18n.service';
import { EXPERIENCES, REGALIAS } from './constants';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  readonly lang = this.i18nService.langSignal;
  readonly regalias = REGALIAS;
  readonly experiences = EXPERIENCES;

  constructor(private i18nService: I18nService) {}
}
