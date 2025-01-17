import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../../services/icon.service';
import { I18nService } from '../../shared/i18n.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [IconService],
})
export class FooterComponent {
  private iconService = inject(IconService);
  private i18nService = inject(I18nService);

  readonly lang = this.i18nService.langSignal;

  onChangeLanguage(lang: Language) {
    this.i18nService.set(lang);
  }
}
