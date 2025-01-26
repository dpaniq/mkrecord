import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../shared/i18n.service';
import { NAVIGATION } from './constants';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, MatButtonToggleModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.css',
})
export class NavMobileComponent {
  protected readonly i18nService = inject(I18nService);

  protected readonly lang = this.i18nService.langSignal;

  protected readonly navigation = NAVIGATION;
}
