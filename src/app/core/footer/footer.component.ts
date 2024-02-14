import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../../services/icon.service';
import { NAVIGATION } from '../header/constants';
import { I18nService } from '../../shared/i18n.service';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [IconService, I18nService],
})
export class FooterComponent {
  private iconService = inject(IconService);
  private i18nService = inject(I18nService);

  readonly lang = this.i18nService.langSignal;

  onChangeLanguage({ value }: MatButtonToggleChange) {
    this.i18nService.set(value);
  }
}
