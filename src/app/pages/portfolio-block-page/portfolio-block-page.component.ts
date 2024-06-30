import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-portfolio-block-page',
  standalone: true,
  imports: [MatButtonToggleModule, MatCheckboxModule],
  templateUrl: './portfolio-block-page.component.html',
  styleUrl: './portfolio-block-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioBlockPageComponent {
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
