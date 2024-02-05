import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { I18nService } from '../../shared/i18n.service';
import { NAVIGATION } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, MatButtonToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly lang = this.i18nService.langSignal;
  readonly navigation = NAVIGATION;
  constructor(private i18nService: I18nService) {}

  onChangeLanguage({ value }: MatButtonToggleChange) {
    this.i18nService.set(value);
  }
}
